import React from 'react';
import {BlogPostItemsProps} from '@docusaurus/plugin-content-blog';
import ElectricCard from '@site/src/components/ElectricCard';
import './styles.css';

export default function BlogPostItems({items}: BlogPostItemsProps): JSX.Element {
  return (
    <div className="tags-blog-grid">
      {items.map(({content: BlogPostContent}) => {
        const {metadata: postMetadata} = BlogPostContent;
        const {title, description, frontMatter, date, tags, readingTime, permalink} = postMetadata;
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
  );
}
