import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Home, FileText, Archive, Tag, BookOpen, Github, Sparkles, MessageCircleHeart } from 'lucide-react';
import { gsap } from 'gsap';
import './styles.css';

const iconMap = {
  Home: Home,
  FileText: FileText,
  Archive: Archive,
  Tag: Tag,
  BookOpen: BookOpen,
  Github: Github,
  MessageCircleHeart: MessageCircleHeart,
};

const defaultLinks = {
  博客: [
    { label: '主页', link: '/', icon: 'Home' },
    { label: '博客', link: '/blog', icon: 'FileText' },
    { label: '归档', link: '/blog/archive', icon: 'Archive' },
    { label: '标签', link: '/blog/tags', icon: 'Tag' },
  ],
  应用: [
    { label: '文档', link: '/docs/intro', icon: 'BookOpen' },
  ],
  服务: [
    { label: 'GitHub', link: 'https://github.com/Chujie-cre/blog', icon: 'Github', external: true },
  ],
};

export default function LinksMenu({ 
  links = defaultLinks,
  logo = 'MessageCircleHeart',
  title = 'Menu'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const itemsRef = useRef([]);

  // 点击外部关闭菜单
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // GSAP动画 - 打开菜单
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const tl = gsap.timeline();
      
      // 下拉框整体动画
      tl.fromTo(dropdownRef.current, 
        { 
          opacity: 0, 
          y: -20, 
          scale: 0.95,
          rotateX: -10
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotateX: 0,
          duration: 0.4, 
          ease: 'back.out(1.7)'
        }
      );

      // Header动画
      if (headerRef.current) {
        tl.fromTo(headerRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' },
          '-=0.2'
        );
      }

      // 菜单项依次动画
      if (itemsRef.current.length > 0) {
        tl.fromTo(itemsRef.current,
          { opacity: 0, y: 15, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.3, 
            stagger: 0.05,
            ease: 'back.out(1.2)'
          },
          '-=0.15'
        );
      }

      // Footer动画
      if (footerRef.current) {
        tl.fromTo(footerRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '-=0.1'
        );
      }
    }
  }, [isOpen]);

  // 关闭菜单动画
  const handleClose = () => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setIsOpen(false)
      });
    } else {
      setIsOpen(false);
    }
  };

  // 菜单项hover动画
  const handleItemHover = (e, isEntering) => {
    const item = e.currentTarget;
    const icon = item.querySelector('.links-menu-item-icon');
    
    if (isEntering) {
      gsap.to(item, { 
        scale: 1.02, 
        duration: 0.2, 
        ease: 'power2.out' 
      });
      if (icon) {
        gsap.to(icon, { 
          rotate: 10, 
          scale: 1.1,
          duration: 0.3, 
          ease: 'back.out(2)' 
        });
      }
    } else {
      gsap.to(item, { 
        scale: 1, 
        duration: 0.2, 
        ease: 'power2.out' 
      });
      if (icon) {
        gsap.to(icon, { 
          rotate: 0, 
          scale: 1,
          duration: 0.2, 
          ease: 'power2.out' 
        });
      }
    }
  };

  // 收集所有菜单项的ref
  const setItemRef = (el, index) => {
    if (el) {
      itemsRef.current[index] = el;
    }
  };

  let itemIndex = 0;

  return (
    <div className="links-menu-wrapper" ref={menuRef}>
      <button 
        className={`links-menu-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => isOpen ? handleClose() : setIsOpen(true)}
        aria-label="打开链接菜单"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="links-menu-dropdown" ref={dropdownRef}>
          <div className="links-menu-header" ref={headerRef}>
            <span className="links-menu-logo">
              {iconMap[logo] ? React.createElement(iconMap[logo], { size: 24 }) : logo}
            </span>
            <span className="links-menu-title">{title}</span>
          </div>
          
          <div className="links-menu-content" ref={contentRef}>
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="links-menu-category">
                <div className="links-menu-category-title">{category}</div>
                <div className="links-menu-items">
                  {items.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    const currentIndex = itemIndex++;
                    return item.external ? (
                      <a
                        key={index}
                        ref={(el) => setItemRef(el, currentIndex)}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="links-menu-item"
                        onClick={handleClose}
                        onMouseEnter={(e) => handleItemHover(e, true)}
                        onMouseLeave={(e) => handleItemHover(e, false)}
                      >
                        <span className="links-menu-item-icon">
                          {IconComponent ? <IconComponent size={18} /> : item.icon}
                        </span>
                        <span className="links-menu-item-label">{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        key={index}
                        ref={(el) => setItemRef(el, currentIndex)}
                        to={item.link}
                        className="links-menu-item"
                        onClick={handleClose}
                        onMouseEnter={(e) => handleItemHover(e, true)}
                        onMouseLeave={(e) => handleItemHover(e, false)}
                      >
                        <span className="links-menu-item-icon">
                          {IconComponent ? <IconComponent size={18} /> : item.icon}
                        </span>
                        <span className="links-menu-item-label">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="links-menu-footer" ref={footerRef}>
            <Sparkles size={16} className="links-menu-footer-icon" />
            <span>更多我的项目</span>
          </div>
        </div>
      )}
    </div>
  );
}
