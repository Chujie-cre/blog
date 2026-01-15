import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import { DifficultyBadge } from '@site/src/components/BlogMetaBadges';
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
    frontMatter?: {
      image?: string;
      difficulty?: string;
    };
  };
};

type Props = {
  archive: {
    blogPosts: BlogPost[];
    blogPostsPerYear: Record<string, BlogPost[]>;
  };
};

// 默认封面图
const DEFAULT_IMAGE = '/blog/hero_img/fishing.png';

export default function BlogArchivePageContent(props: Props): JSX.Element {
  const {archive} = props;
  
  // 安全检查
  if (!archive || !archive.blogPosts || !archive.blogPosts.length) {
    return (
      <div className={styles.archiveEmpty}>
        <p>暂无文章</p>
      </div>
    );
  }

  // 按年份分组并排序
  const years = useMemo(() => {
    const grouped: Record<string, BlogPost[]> = {};
    archive.blogPosts.forEach(post => {
      const year = new Date(post.metadata.date).getFullYear().toString();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(post);
    });
    // 每年内按日期降序排序
    Object.keys(grouped).forEach(year => {
      grouped[year].sort((a, b) => 
        new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
      );
    });
    return grouped;
  }, [archive.blogPosts]);

  const sortedYears = Object.keys(years).sort((a, b) => Number(b) - Number(a));

  return (
    <div className={styles.archivePage}>
      {/* 左侧文章列表 - 70% */}
      <main className={styles.archiveMain}>
        {/* 页面标题 */}
        <div className={styles.archiveTitle}>
          <h1>文章</h1>
          <span className={styles.archiveTotalCount}>{archive.blogPosts.length}</span>
        </div>

        {/* 按年份分组的文章列表 */}
        <div className={styles.archiveYearGroups}>
          {sortedYears.map((year) => (
            <div key={year} className={styles.archiveYearGroup}>
              <h2 className={styles.archiveYearTitle}>{year}</h2>
              <div className={styles.archivePostList}>
                {years[year].map((post) => (
                  <Link
                    key={post.metadata.permalink}
                    to={post.metadata.permalink}
                    className={styles.archivePostItem}
                  >
                    {/* 封面图 */}
                    <div className={styles.archivePostThumb}>
                      <img 
                        src={post.metadata.frontMatter?.image || DEFAULT_IMAGE} 
                        alt={post.metadata.title}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* 文章信息 */}
                    <div className={styles.archivePostInfo}>
                      <div className={styles.archivePostHeader}>
                        <h3 className={styles.archivePostTitle}>{post.metadata.title}</h3>
                        {post.metadata.frontMatter?.difficulty && (
                          <DifficultyBadge 
                            difficulty={post.metadata.frontMatter.difficulty} 
                            showLabel={false} 
                            size="small" 
                          />
                        )}
                      </div>
                      {post.metadata.tags && post.metadata.tags.length > 0 && (
                        <div className={styles.archivePostTags}>
                          {post.metadata.tags.slice(0, 3).map(tag => (
                            <span key={tag.label} className={styles.archivePostTag}>
                              # {tag.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 右侧边栏 - 30% 预留区 */}
      <aside className={styles.archiveSidebar}>
        {/* 预留给用户放置其他内容 */}
      </aside>
    </div>
  );
}
