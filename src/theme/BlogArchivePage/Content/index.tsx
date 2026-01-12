import React from 'react';
import {
  useCollapsible,
  Collapsible,
} from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import MagicBento from '@site/src/components/MagicBento';
import styles from './styles.module.css';

type BlogPost = {
  metadata: {
    date: string;
    permalink: string;
    title: string;
    description?: string;
    tags?: Array<{
      permalink: string;
      label: string;
    }>;
    readingTime?: number;
  };
};

type Props = {
  archive: {
    blogPosts: BlogPost[];
    blogPostsPerYear: Record<string, BlogPost[]>;
  };
};

type YearProp = {
  year: string;
  posts: BlogPost[];
};

function YearSection({year, posts}: YearProp): JSX.Element {
  const {collapsed, toggleCollapsed} = useCollapsible({
    initialState: false,
  });

  return (
    <div className={styles.yearSection}>
      <div className={styles.yearHeader} onClick={toggleCollapsed}>
        <Heading as="h2" className={styles.yearTitle}>
          <span className={styles.yearNumber}>{year}</span>
          <span className={styles.yearCount}>
            {posts.length} 篇文章
          </span>
        </Heading>
        <div className={`${styles.yearToggle} ${collapsed ? styles.collapsed : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M6 9l6 6 6-6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      <Collapsible lazy collapsed={collapsed}>
        <div className={styles.yearPosts}>
          {posts.map((post) => (
            <article key={post.metadata.date} className={styles.postCard}>
              <div className={styles.postDate}>
                {new Date(post.metadata.date).toLocaleDateString('zh-CN', {
                  month: 'short',
                  day: '2-digit'
                })}
              </div>
              <div className={styles.postContent}>
                <Heading as="h3" className={styles.postTitle}>
                  <Link to={post.metadata.permalink} className={styles.postLink}>
                    {post.metadata.title}
                  </Link>
                </Heading>
                {post.metadata.description && (
                  <p className={styles.postDescription}>
                    {post.metadata.description}
                  </p>
                )}
                <div className={styles.postMeta}>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className={styles.postTags}>
                      {post.metadata.tags.map((tag) => (
                        <Link
                          key={tag.permalink}
                          to={tag.permalink}
                          className={styles.postTag}
                        >
                          #{tag.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {post.metadata?.readingTime && (
                    <span className={styles.readingTime}>
                      约 {Math.ceil(post.metadata.readingTime)} 分钟阅读
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Collapsible>
    </div>
  );
}

export default function BlogArchivePageContent(props: Props): JSX.Element {
  const {archive} = props;
  
  // 安全检查
  if (!archive || !archive.blogPosts || !archive.blogPosts.length) {
    return (
      <div className={styles.emptyState}>
        <p>暂无文章</p>
      </div>
    );
  }
  
  // 按日期排序，并转换为MagicBento需要的格式
  const bentoArticles = archive.blogPosts
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .map(post => ({
      metadata: {
        ...post.metadata,
        frontMatter: {
          image: post.metadata.frontMatter?.image || '/img/docusaurus.png'
        }
      }
    }));
  
  return <MagicBento posts={bentoArticles} />;
}
