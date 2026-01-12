import React, { useState, useMemo, Suspense, lazy } from 'react';
import Layout from '@theme/Layout';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import ElectricCard from '@site/src/components/ElectricCard';
import './styles.css';

// 使用lazy loading避免chunk loading问题
const BlogFilter = lazy(() => import('@site/src/components/BlogFilter'));

export default function BlogListPageWrapper(props) {
  const { metadata, items } = props;
  const { blogTitle, blogDescription } = metadata;
  const [filteredItems, setFilteredItems] = useState(items);

  // 提取所有标签用于筛选
  const allTags = useMemo(() => {
    const tagMap = new Map();
    items.forEach(({ content: BlogPostContent }) => {
      const { metadata: postMetadata } = BlogPostContent;
      if (postMetadata.tags) {
        postMetadata.tags.forEach(tag => {
          const count = tagMap.get(tag.label) || 0;
          tagMap.set(tag.label, count + 1);
        });
      }
    });
    return Array.from(tagMap.entries()).map(([label, count]) => ({ label, count }));
  }, [items]);

  return (
    <Layout title={blogTitle} description={blogDescription}>
      <SearchMetadata tag="blog_posts_list" />
      <div className="blog-grid-container">
        {/* 隐藏主标题以提升美观度 */}
        {/* <header className="blog-grid-header">
          <h1>{blogTitle}</h1>
          <p>{blogDescription}</p>
        </header> */}
        
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>加载筛选组件...</div>}>
          <BlogFilter
            posts={items.map(({ content: BlogPostContent }) => ({ 
              metadata: BlogPostContent.metadata,
              content: BlogPostContent.contentTitle || BlogPostContent.excerpt || BlogPostContent.toString?.() || ''
            }))}
            onFilter={(filtered) => {
              // 将筛选结果映射回原始items格式
              const filteredItemsMap = filtered.map(filteredPost => 
                items.find(({ content: BlogPostContent }) => 
                  BlogPostContent.metadata.permalink === filteredPost.metadata.permalink
                )
              ).filter(Boolean);
              setFilteredItems(filteredItemsMap);
            }}
            tags={allTags}
          />
        </Suspense>
        
        <div className="blog-grid">
          {filteredItems.map(({ content: BlogPostContent }) => {
            const { metadata: postMetadata } = BlogPostContent;
            const { title, description, frontMatter, date, tags, readingTime, permalink } = postMetadata;
            const image = frontMatter.image || '/img/docusaurus.png';
            const formattedDate = new Date(date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <ElectricCard
                key={permalink}
                title={title}
                description={description}
                image={image}
                tags={tags}
                date={formattedDate}
                readingTime={readingTime}
                permalink={permalink}
              />
            );
          })}
        </div>
        <BlogListPaginator metadata={metadata} />
      </div>
    </Layout>
  );
}
