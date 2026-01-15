import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Home, FileText, Archive, Tag, BookOpen, Github, Sparkles, MessageCircleHeart } from 'lucide-react';
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="links-menu-wrapper" ref={menuRef}>
      <button 
        className={`links-menu-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="打开链接菜单"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="links-menu-dropdown">
          <div className="links-menu-header">
            <span className="links-menu-logo">
              {iconMap[logo] ? React.createElement(iconMap[logo], { size: 24 }) : logo}
            </span>
            <span className="links-menu-title">{title}</span>
          </div>
          
          <div className="links-menu-content">
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="links-menu-category">
                <div className="links-menu-category-title">{category}</div>
                <div className="links-menu-items">
                  {items.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return item.external ? (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="links-menu-item"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="links-menu-item-icon">
                          {IconComponent ? <IconComponent size={18} /> : item.icon}
                        </span>
                        <span className="links-menu-item-label">{item.label}</span>
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={item.link}
                        className="links-menu-item"
                        onClick={() => setIsOpen(false)}
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

          <div className="links-menu-footer">
            <Sparkles size={16} className="links-menu-footer-icon" />
            <span>更多我的项目</span>
          </div>
        </div>
      )}
    </div>
  );
}
