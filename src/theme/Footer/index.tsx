import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CurvedLoop from '@site/src/components/CurvedText';
import Folder from '@site/src/components/Folder';
import './styles.css';

export default function Footer(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="minimal-footer">
      <CurvedLoop marqueeText="REACT ✦ BITS ✦ BE ✦ CREATIVE ✦ " speed={2} curveAmount={80} />
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-left">
            <Folder color="#8B5CF6" size={1.2} items={['Doc', 'Blog', 'Code']} />
          </div>
          <div className="footer-center">
            <Link to="/" className="footer-logo">
              <img src="/favicon.svg" alt="Logo" className="footer-logo-img" />
              {siteConfig.title}
            </Link>
            <nav className="footer-nav">
              <Link to="/docs/intro">文档</Link>
              <Link to="/blog">博客</Link>
              <Link to="/blog/tags">标签</Link>
              <Link to="/blog/archive">文章列表</Link>
            </nav>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="mailto:your@email.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </a>
              <a href="https://yoursite.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <span className="footer-copy">© {currentYear} {siteConfig.title}</span>
          <span className="footer-license">MIT</span>
        </div>
      </div>
    </footer>
  );
}
