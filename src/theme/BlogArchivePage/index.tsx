import React from 'react';
import Layout from '@theme/Layout';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogArchivePageContent from '@theme/BlogArchivePage/Content';
import SearchMetadata from '@theme/SearchMetadata';
import GridMotion from '@site/src/components/GridMotion';
import RotatingText from '@site/src/components/RotatingText';
import styles from './styles.module.css';

const gridItems = [
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c5.svg', // 日历
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4da.svg', // 书籍
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4dd.svg', // 笔记
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg', // 文档
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f5c2.svg', // 卡片索引
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg', // 图表
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f50d.svg', // 放大镜
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c1.svg', // 文件夹
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2728.svg', // 闪光
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f31f.svg', // 星星
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ab.svg', // 头晕
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a1.svg', // 灯泡
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg', // 火箭
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg', // 电脑
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f1.svg', // 手机
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f310.svg', // 地球
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f525.svg', // 火焰
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a1.svg', // 闪电
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f308.svg', // 彩虹
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3c6.svg', // 奖杯
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48e.svg', // 宝石
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg', // 机器人
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3af.svg', // 目标
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f389.svg', // 庆祝
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3a8.svg', // 调色板
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f52e.svg', // 水晶球
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg', // 大脑
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6e0.svg', // 锤子
];

export default function BlogArchivePage(props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={ThemeClassNames.wrapper.blogPages}
    >
      <PageMetadata title="博客归档" description="按时间浏览所有博客文章" />
      <SearchMetadata tag="blog_archive_page" />
      <Layout>
        <div className={styles.pageContainer}>
          {/* 隐藏主标题以提升美观度 */}
          {/* <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>归档</h1>
            <p className={styles.pageSubtitle}>
              {props.archive?.blogPosts?.length || 0} 篇文章
            </p>
          </div> */}
          <BlogArchivePageContent {...props} />
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
