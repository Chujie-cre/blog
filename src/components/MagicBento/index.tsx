import React, { useRef, useEffect, useCallback, useState } from 'react';
import Link from '@docusaurus/Link';
import { gsap } from 'gsap';
import styles from './styles.module.css';

interface BlogPost {
  metadata: {
    permalink: string;
    title: string;
    date: string;
    description?: string;
    tags?: Array<{
      permalink: string;
      label: string;
    }>;
    frontMatter: {
      image?: string;
    };
    readingTime?: number;
  };
}

interface MagicBentoProps {
  posts: BlogPost[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  disableAnimations?: boolean;
  particleCount?: number;
  spotlightRadius?: number;
  glowColor?: string;
  enableTilt?: boolean;
  enableBorderGlow?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(${color}, 0.8) 0%, rgba(${color}, 0.4) 50%, transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
    left: ${x}px;
    top: ${y}px;
    transform: scale(0);
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: string, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-color-rgb', glow);
  card.style.setProperty('--glow-radius', `${radius}px`);
};

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  style?: React.CSSProperties;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const ParticleCard: React.FC<ParticleCardProps> = ({
  children,
  className = '',
  disableAnimations = false,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  style,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          {
            scale: 0,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            onComplete: () => {
              gsap.to(clone, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                delay: 1.5,
                ease: 'back.in(1.7)',
                onComplete: () => {
                  clone.parentNode?.removeChild(clone);
                  const idx = particlesRef.current.indexOf(clone);
                  if (idx > -1) particlesRef.current.splice(idx, 1);
                }
              });
            }
          }
        );
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.set(element, {
          transformPerspective: 1000,
          transformStyle: 'preserve-3d'
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, clickEffect, enableMagnetism, glowColor]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

interface GlobalSpotlightProps {
  gridRef: React.RefObject<HTMLDivElement>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}

const GlobalSpotlight: React.FC<GlobalSpotlightProps> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef<HTMLElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      background: radial-gradient(
        circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.1) 25%,
        rgba(${glowColor}, 0.05) 50%,
        transparent 70%
      );
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;

    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section') as HTMLElement;
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });

        cards.forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowColor, spotlightRadius);

        const intensity = effectiveDistance <= proximity
          ? '0.6'
          : effectiveDistance <= fadeDistance
            ? `${0.6 * (1 - (effectiveDistance - proximity) / (fadeDistance - proximity))}`
            : '0';

        cardElement.style.setProperty('--glow-intensity', intensity);
      });

      gsap.to(spotlightRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? 0.8 * (1 - (minDistance - proximity) / (fadeDistance - proximity))
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (spotlightRef.current) {
        document.body.removeChild(spotlightRef.current);
      }
    };
  }, [disableAnimations, enabled, gridRef, glowColor, spotlightRadius]);

  return null;
};

interface BentoCardGridProps {
  children: React.ReactNode;
  gridRef: React.RefObject<HTMLDivElement>;
}

const BentoCardGrid: React.FC<BentoCardGridProps> = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default function MagicBento({
  posts,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  disableAnimations = false,
  particleCount = DEFAULT_PARTICLE_COUNT,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  enableBorderGlow = true,
  clickEffect = true,
  enableMagnetism = true
}: MagicBentoProps): JSX.Element {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  if (!posts || posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>暂无文章</p>
      </div>
    );
  }

  // 转换博客文章数据为卡片数据格式
  const cardData = posts.map((post, index) => {
    // 五彩缤纷的亮色主题渐变
    const lightColors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // 紫蓝渐变
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // 粉红渐变  
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // 蓝青渐变
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // 绿青渐变
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // 粉黄渐变
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', // 青粉渐变
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', // 粉紫渐变
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', // 橙黄渐变
    ];
    
    // 对应的深色主题渐变
    const darkColors = [
      'linear-gradient(135deg, #2d1b69 0%, #11101d 100%)', // 深紫蓝
      'linear-gradient(135deg, #8b1538 0%, #3a1c47 100%)', // 深粉红
      'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // 深蓝青
      'linear-gradient(135deg, #134e5e 0%, #71b280 100%)', // 深绿青
      'linear-gradient(135deg, #c31432 0%, #240b36 100%)', // 深粉黄
      'linear-gradient(135deg, #29323c 0%, #485563 100%)', // 深青粉
      'linear-gradient(135deg, #bc4e9c 0%, #f80759 100%)', // 深粉紫
      'linear-gradient(135deg, #f12711 0%, #f5af19 100%)', // 深橙黄
    ];
    
    return {
      colorLight: lightColors[index % lightColors.length],
      colorDark: darkColors[index % darkColors.length],
      title: post.metadata.title,
      description: post.metadata.description || '',
      label: new Date(post.metadata.date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      post: post
    };
  });

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => {
          const baseClassName = `magic-bento-card magic-bento-card--colorful ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
          const cardProps = {
            className: baseClassName,
            style: {
              '--light-bg': card.colorLight,
              '--dark-bg': card.colorDark,
              '--glow-color': glowColor
            } as React.CSSProperties
          };

          if (enableStars) {
            return (
              <Link to={card.post.metadata.permalink} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ParticleCard
                  {...cardProps}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  <div className="magic-bento-card__header">
                    <div className="magic-bento-card__label">{card.label}</div>
                  </div>
                  <div className="magic-bento-card__content">
                    <h2 className="magic-bento-card__title">{card.title}</h2>
                    <p className="magic-bento-card__description">{card.description}</p>
                  </div>
                </ParticleCard>
              </Link>
            );
          }

          return (
            <Link to={card.post.metadata.permalink} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                {...cardProps}
              >
                <div className="magic-bento-card__header">
                  <div className="magic-bento-card__label">{card.label}</div>
                </div>
                <div className="magic-bento-card__content">
                  <h2 className="magic-bento-card__title">{card.title}</h2>
                  <p className="magic-bento-card__description">{card.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </BentoCardGrid>
    </>
  );
}
