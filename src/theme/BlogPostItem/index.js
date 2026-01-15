import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import Comments from '@site/src/components/Comments';
import {
  DifficultyBadge, 
  LastUpdateInfo
} from '@site/src/components/BlogMetaBadges';

export default function BlogPostItemWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {
    comments = true, 
    difficulty, 
    last_update
  } = metadata.frontMatter;
  const {editUrl} = metadata;

  return (
    <>
      {isBlogPostPage && difficulty && (
        <div className="blog-difficulty-header">
          <DifficultyBadge difficulty={difficulty} />
        </div>
      )}
      <BlogPostItem {...props} />
      {isBlogPostPage && (last_update || editUrl) && (
        <LastUpdateInfo lastUpdate={last_update} editUrl={editUrl} />
      )}
      {comments && isBlogPostPage && <Comments />}
    </>
  );
}
