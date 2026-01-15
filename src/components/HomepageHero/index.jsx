import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import GridMotion from '@site/src/components/GridMotion';
import RotatingText from '@site/src/components/RotatingText';
import { Rocket, BookOpen } from 'lucide-react';
import styles from './styles.module.css';

const gridItems = [
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2728.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a1.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f310.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3af.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f525.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a1.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f389.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4da.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3a8.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f52e.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f30f.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ab.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4dd.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f5a5.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f1.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3c6.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48e.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f308.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f31f.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4d6.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f50d.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6e0.svg',
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ac.svg',
];

export default function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();

  const rotatingTexts = useMemo(
    () => [
      translate({
        id: 'homepage.hero.rotating.technology',
        message: '技术',
        description: 'Rotating text item: technology',
      }),
      translate({
        id: 'homepage.hero.rotating.creativity',
        message: '创意',
        description: 'Rotating text item: creativity',
      }),
      translate({
        id: 'homepage.hero.rotating.inspiration',
        message: '灵感',
        description: 'Rotating text item: inspiration',
      }),
      translate({
        id: 'homepage.hero.rotating.future',
        message: '未来',
        description: 'Rotating text item: future',
      }),
      translate({
        id: 'homepage.hero.rotating.possibility',
        message: '可能',
        description: 'Rotating text item: possibility',
      }),
    ],
    []
  );

  return (
    <section className={styles.hero}>
      <div className={styles.leftCol}>
        <GridMotion items={gridItems} gradientColor="rgba(99, 102, 241, 0.3)" />
      </div>
      <div className={styles.rightCol}>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>

        <div className={styles.exploreSection}>
          <div className={styles.rotatingTextWrap}>
            <span className={styles.staticText}>
              <Translate id="homepage.hero.explore.label" description="Static explore label">
                探索
              </Translate>
            </span>
            <RotatingText
              texts={rotatingTexts}
              mainClassName={styles.rotatingText}
              staggerFrom="last"
              staggerDuration={0.025}
              rotationInterval={2500}
            />
          </div>
          <p className={styles.exploreDescription}>
            <Translate
              id="homepage.hero.explore.description"
              description="Short description under the rotating text"
            >
              在这里发现更多精彩内容，探索无限可能
            </Translate>
          </p>
        </div>

        <div className={styles.buttons}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            <Rocket size={20} className={styles.btnIcon} />
            <Translate id="homepage.hero.cta.primary" description="Primary CTA button">
              开始探索
            </Translate>
          </Link>
          <Link className={styles.secondaryBtn} to="/blog">
            <BookOpen size={20} className={styles.btnIcon} />
            <Translate id="homepage.hero.cta.secondary" description="Secondary CTA button">
              阅读博客
            </Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}
