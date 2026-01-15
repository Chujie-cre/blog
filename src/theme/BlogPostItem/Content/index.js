import React from 'react';
import Content from '@theme-original/BlogPostItem/Content';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {
  PrerequisitesBadges, 
  HowSection
} from '@site/src/components/BlogMetaBadges';

export default function ContentWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {prerequisites, how} = metadata.frontMatter;

  return (
    <>
      {isBlogPostPage && (prerequisites || how) && (
        <div className="blog-post-meta-section">
          {prerequisites && <PrerequisitesBadges prerequisites={prerequisites} />}
          {how && <HowSection how={how} />}
        </div>
      )}
      <Content {...props} />
    </>
  );
}
