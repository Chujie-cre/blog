import React, { useState } from 'react';
import clsx from 'clsx';
import {
  listTagsByLetters,
} from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type TagsListItem = {
  label: string;
  permalink: string;
  count: number;
  items?: Array<{
    content: {
      metadata: {
        permalink: string;
        title: string;
        date: string;
        tags?: Array<{
          permalink: string;
          label: string;
        }>;
      };
    };
  }>;
};

type Props = {
  tags: TagsListItem[];
};

function TagLetterEntryItem({letterEntry}: {letterEntry: TagsListItem}) {
  if (!letterEntry) return null;
  
  return (
    <article className={styles.tagCard}>
      <Link 
        to={letterEntry.permalink || '#'} 
        className={styles.tagLink}
      >
        <div className={styles.tagHeader}>
          <h3 className={styles.tagName}>
            #{letterEntry.label || '未知标签'}
          </h3>
          <div className={styles.tagCount}>
            {letterEntry.count || 0}
          </div>
        </div>
        <div className={styles.tagDescription}>
          {letterEntry.count || 0} 篇文章使用了此标签
        </div>
        <div className={styles.tagFooter}>
          <span className={styles.tagAction}>
            查看文章 →
          </span>
        </div>
      </Link>
    </article>
  );
}

function TagLetterEntry({letterEntry}: {letterEntry: [string, TagsListItem[]]}) {
  if (!letterEntry || !Array.isArray(letterEntry) || letterEntry.length < 2) {
    return null;
  }
  
  const [letter, tagItems] = letterEntry;
  
  if (!letter || !tagItems || !Array.isArray(tagItems)) {
    return null;
  }
  
  return (
    <div className={styles.letterSection}>
      <Heading as="h2" className={styles.letterHeading}>
        {letter.toUpperCase()}
      </Heading>
      <div className={styles.letterTags}>
        {tagItems.map((tag) => (
          <TagLetterEntryItem key={tag?.permalink || Math.random()} letterEntry={tag} />
        ))}
      </div>
    </div>
  );
}

export default function BlogTagsListPageContent({tags}: Props): JSX.Element {
  // 安全检查
  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>暂无标签</p>
      </div>
    );
  }

  // 按文章数量排序
  const sortedTags = tags.sort((a, b) => (b?.count || 0) - (a?.count || 0));

  return (
    <div className={styles.tagsGrid}>
      {sortedTags.map((tag) => (
        <Link
          key={tag.permalink}
          to={tag.permalink}
          className={styles.tagItem}
        >
          <span className={styles.tagName}>{tag.label}</span>
          <span className={styles.tagCount}>{tag.count}</span>
        </Link>
      ))}
    </div>
  );
}
