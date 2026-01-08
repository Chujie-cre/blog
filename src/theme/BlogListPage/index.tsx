import React from 'react';
import Layout from '@theme/Layout';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import ElectricCard from '@site/src/components/ElectricCard';
import './styles.css';

export default function BlogListPageWrapper(props) {
  const { metadata, items } = props;
  const { blogTitle, blogDescription } = metadata;

  return (
    <Layout title={blogTitle} description={blogDescription}>
      <SearchMetadata tag="blog_posts_list" />
      <div className="blog-grid-container">
        <header className="blog-grid-header">
          <h1>{blogTitle}</h1>
          <p>{blogDescription}</p>
        </header>
        <div className="blog-grid">
          {items.map(({ content: BlogPostContent }) => {
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
