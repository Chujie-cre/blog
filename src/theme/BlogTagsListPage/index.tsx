import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import BlogTagsListPageContent from '@theme/BlogTagsListPage/Content';
import SearchMetadata from '@theme/SearchMetadata';
import Layout from '@theme/Layout';
import GridMotion from '@site/src/components/GridMotion';
import RotatingText from '@site/src/components/RotatingText';
import styles from './styles.module.css';

const gridItems = [
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3f7.svg', // 标签
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4da.svg', // 书籍
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f50d.svg', // 搜索
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f5c2.svg', // 分类
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c1.svg', // 文件夹
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3af.svg', // 目标
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2728.svg', // 闪光
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f31f.svg', // 星星
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4a1.svg', // 灯泡
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg', // 火箭
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg', // 电脑
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f310.svg', // 地球
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f525.svg', // 火焰
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/26a1.svg', // 闪电
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f308.svg', // 彩虹
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3c6.svg', // 奖杯
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48e.svg', // 宝石
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f916.svg', // 机器人
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f389.svg', // 庆祝
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3a8.svg', // 调色板
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f52e.svg', // 水晶球
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg', // 大脑
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6e0.svg', // 锤子
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg', // 图表
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4dd.svg', // 笔记
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg', // 文档
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4f1.svg', // 手机
  'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4ab.svg', // 头晕
];

export default function BlogTagsListPage(props): JSX.Element {
  const title = translateTagsPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list_page" />
      <Layout>
        <div className={styles.pageContainer}>
          {/* 隐藏主标题以提升美观度 */}
          {/* <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>标签</h1>
            <p className={styles.pageSubtitle}>
              {props.tags?.length || 0} 个标签
            </p>
          </div> */}
          <BlogTagsListPageContent {...props} />
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
