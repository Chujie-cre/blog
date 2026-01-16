import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styles from './styles.module.css';

// 排序选项
const SORT_OPTIONS = [
  { key: 'newest', label: '最新' },
  { key: 'oldest', label: '最旧' },
  { key: 'longest', label: '字数最多' },
  { key: 'shortest', label: '字数最少' },
];

// 难度筛选选项
const DIFFICULTY_OPTIONS = [
  { key: 'all', label: '全部' },
  { key: 'easy', label: '简单' },
  { key: 'middle', label: '进阶' },
  { key: 'hard', label: '困难' },
];

function BlogFilter({ posts, onFilter, tags = [] }) {
  const [sortBy, setSortBy] = useState('newest');
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showAllTags, setShowAllTags] = useState(false);
  const [filteredCount, setFilteredCount] = useState(posts.length);

  // 显示的标签数量
  const visibleTagCount = 8;
  const visibleTags = showAllTags ? tags : tags.slice(0, visibleTagCount);
  const hasMoreTags = tags.length > visibleTagCount;

  // 筛选逻辑
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // 按标签筛选
    if (selectedTag) {
      result = result.filter(post =>
        post.metadata.tags?.some(tag => tag.label === selectedTag)
      );
    }

    // 按难度筛选
    if (selectedDifficulty !== 'all') {
      result = result.filter(post => 
        post.metadata.frontMatter?.difficulty === selectedDifficulty
      );
    }

    // 排序处理
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.metadata.date) - new Date(b.metadata.date));
        break;
      case 'longest':
        result.sort((a, b) => (b.metadata.readingTime || 0) - (a.metadata.readingTime || 0));
        break;
      case 'shortest':
        result.sort((a, b) => (a.metadata.readingTime || 0) - (b.metadata.readingTime || 0));
        break;
      default:
        result.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
        break;
    }

    return result;
  }, [posts, selectedTag, selectedDifficulty, sortBy]);

  // 更新筛选结果
  useEffect(() => {
    setFilteredCount(filteredPosts.length);
    onFilter(filteredPosts);
  }, [filteredPosts, onFilter]);

  const handleTagClick = useCallback((tagLabel) => {
    if (selectedTag === tagLabel) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tagLabel);
    }
  }, [selectedTag]);

  const handleClearAll = useCallback(() => {
    setSelectedTag(null);
    setSelectedDifficulty('all');
    setSortBy('newest');
  }, []);

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterInner}>
        {/* 排序选项 */}
        <div className={styles.sortSection}>
          {SORT_OPTIONS.map(option => (
            <button
              key={option.key}
              onClick={() => setSortBy(option.key)}
              className={`${styles.filterBtn} ${
                sortBy === option.key ? styles.filterBtnActive : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className={styles.divider} />

        {/* 难度筛选 */}
        <div className={styles.difficultySection}>
          {DIFFICULTY_OPTIONS.map(option => (
            <button
              key={option.key}
              onClick={() => setSelectedDifficulty(option.key)}
              className={`${styles.filterBtn} ${
                selectedDifficulty === option.key ? styles.filterBtnActive : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className={styles.divider} />

        {/* 标签列表 */}
        <div className={styles.tagFilters}>
          {visibleTags.map(tag => (
            <button
              key={tag.label}
              onClick={() => handleTagClick(tag.label)}
              className={`${styles.tagBtn} ${
                selectedTag === tag.label ? styles.tagBtnActive : ''
              }`}
            >
              {tag.label}
            </button>
          ))}
          
          {/* 更多按钮 */}
          {hasMoreTags && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className={styles.moreBtn}
            >
              <span className={styles.moreIcon}>{showAllTags ? '«' : '»'}</span>
              {showAllTags ? '收起' : '更多'}
            </button>
          )}
        </div>

        {/* 筛选结果提示 */}
        {(selectedTag || selectedDifficulty !== 'all') && (
          <div className={styles.filterInfo}>
            <span className={styles.filterInfoText}>
              {filteredCount} 篇
            </span>
            <button 
              onClick={handleClearAll} 
              className={styles.clearBtn}
              title="清除所有筛选"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 使用React.memo优化性能，避免不必要的重新渲染
export default React.memo(BlogFilter, (prevProps, nextProps) => {
  return (
    prevProps.posts.length === nextProps.posts.length &&
    prevProps.tags.length === nextProps.tags.length &&
    JSON.stringify(prevProps.posts) === JSON.stringify(nextProps.posts) &&
    JSON.stringify(prevProps.tags) === JSON.stringify(nextProps.tags)
  );
});
