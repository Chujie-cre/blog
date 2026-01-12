import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GridMotion from '@site/src/components/GridMotion';
import RotatingText from '@site/src/components/RotatingText';
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
            <span className={styles.staticText}>探索</span>
            <RotatingText
              texts={['技术', '创意', '灵感', '未来', '可能']}
              mainClassName={styles.rotatingText}
              staggerFrom="last"
              staggerDuration={0.025}
              rotationInterval={2500}
            />
          </div>
          <p className={styles.exploreDescription}>
            在这里发现更多精彩内容，探索无限可能
          </p>
        </div>
        
        <div className={styles.buttons}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            <span className={styles.btnIcon}>🚀</span>
            开始探索
          </Link>
          <Link className={styles.secondaryBtn} to="/blog">
            <span className={styles.btnIcon}>📝</span>
            阅读博客
          </Link>
        </div>
      </div>
    </section>
  );
}
