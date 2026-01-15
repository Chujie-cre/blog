import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import styles from './styles.module.css';

// 预设的筛选选项
const PRESET_FILTERS = [
  { key: 'all', label: '全部', icon: null },
  { key: 'recent', label: '最新', icon: null },
  { key: 'random', label: '随机', icon: null },
];

function BlogFilter({ posts, onFilter, tags = [] }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTag, setSelectedTag] = useState(null);
  const [showAllTags, setShowAllTags] = useState(false);
  const [filteredCount, setFilteredCount] = useState(posts.length);
  const [randomSeed, setRandomSeed] = useState(Date.now());

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

    // 按预设筛选器处理
    switch (activeFilter) {
      case 'recent':
        result.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
        break;
      case 'random':
        result = result
          .map((post, index) => ({ post, sort: Math.sin(index + randomSeed) }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ post }) => post);
        break;
      case 'all':
      default:
        result.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
        break;
    }

    return result;
  }, [posts, selectedTag, activeFilter, randomSeed]);

  // 更新筛选结果
  useEffect(() => {
    setFilteredCount(filteredPosts.length);
    onFilter(filteredPosts);
  }, [filteredPosts, onFilter]);

  const handleFilterClick = useCallback((filterKey) => {
    if (filterKey === 'random') {
      setRandomSeed(Date.now());
    }
    setActiveFilter(filterKey);
    setSelectedTag(null);
  }, []);

  const handleTagClick = useCallback((tagLabel) => {
    if (selectedTag === tagLabel) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tagLabel);
      setActiveFilter('all');
    }
  }, [selectedTag]);

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterInner}>
        {/* 预设筛选器 */}
        <div className={styles.presetFilters}>
          {PRESET_FILTERS.map(filter => (
            <button
              key={filter.key}
              onClick={() => handleFilterClick(filter.key)}
              className={`${styles.filterBtn} ${
                activeFilter === filter.key && !selectedTag ? styles.filterBtnActive : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 分隔线 */}
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
          
          {hasMoreTags && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className={styles.moreBtn}
            >
              {showAllTags ? '收起' : '更多'}
              <span className={styles.moreIcon}>{showAllTags ? '«' : '»'}</span>
            </button>
          )}
        </div>

        {/* 筛选结果提示 */}
        {selectedTag && (
          <div className={styles.filterInfo}>
            <span className={styles.filterInfoText}>
              {filteredCount} 篇
            </span>
            <button 
              onClick={() => setSelectedTag(null)} 
              className={styles.clearBtn}
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
