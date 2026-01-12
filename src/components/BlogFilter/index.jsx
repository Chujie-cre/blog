import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import styles from './styles.module.css';

function BlogFilter({ posts, onFilter, tags = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('date'); // date, title, random
  const [sortOrder, setSortOrder] = useState('desc'); // asc, desc
  const [filteredCount, setFilteredCount] = useState(posts.length);
  const debounceRef = useRef(null);

  // 搜索输入防抖处理
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms防抖延迟
    
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [searchTerm]);

  // 防抖优化的筛选逻辑
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // 按搜索词筛选 - 使用防抖后的搜索词，支持全文搜索
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase().trim();
      result = result.filter(post => 
        post.metadata.title.toLowerCase().includes(searchLower) ||
        post.metadata.description?.toLowerCase().includes(searchLower) ||
        post.metadata.tags?.some(tag => tag.label.toLowerCase().includes(searchLower)) ||
        post.content?.toLowerCase().includes(searchLower)
      );
    }

    // 按标签筛选
    if (selectedTags.length > 0) {
      result = result.filter(post =>
        selectedTags.every(selectedTag =>
          post.metadata.tags?.some(tag => tag.label === selectedTag)
        )
      );
    }

    // 排序优化 - 避免随机排序时的重复计算
    if (sortBy === 'random') {
      // 为随机排序生成固定种子，避免每次render都变化
      result = result.map((post, index) => ({ post, sort: Math.sin(index) }))
                   .sort((a, b) => sortOrder === 'desc' ? b.sort - a.sort : a.sort - b.sort)
                   .map(({ post }) => post);
    } else {
      result.sort((a, b) => {
        let compareValue = 0;
        
        switch (sortBy) {
          case 'title':
            compareValue = a.metadata.title.localeCompare(b.metadata.title, 'zh-CN');
            break;
          case 'date':
            compareValue = new Date(a.metadata.date) - new Date(b.metadata.date);
            break;
          default:
            compareValue = new Date(a.metadata.date) - new Date(b.metadata.date);
        }
        
        return sortOrder === 'desc' ? -compareValue : compareValue;
      });
    }

    return result;
  }, [posts, debouncedSearchTerm, selectedTags, sortBy, sortOrder]);

  // 更新筛选结果 - 添加延迟执行避免阻塞UI
  useEffect(() => {
    const updateResults = () => {
      setFilteredCount(filteredPosts.length);
      onFilter(filteredPosts);
    };
    
    // 使用setTimeout让UI更新优先于筛选计算
    const timeoutId = setTimeout(updateResults, 0);
    
    return () => clearTimeout(timeoutId);
  }, [filteredPosts, onFilter]);

  const handleTagToggle = useCallback((tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  }, []);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setSortBy('date');
    setSortOrder('desc');
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="搜索博客文章..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
        
        <div className={styles.sortControls}>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="date">按日期</option>
            <option value="title">按标题</option>
            <option value="random">随机排序</option>
          </select>
          
          <button
            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
            className={styles.sortOrderBtn}
            title={sortOrder === 'desc' ? '降序' : '升序'}
          >
            {sortOrder === 'desc' ? '↓' : '↑'}
          </button>
        </div>
      </div>

      <div className={styles.filterTags}>
        <div className={styles.tagLabel}>标签筛选：</div>
        <div className={styles.tagList}>
          {tags.map(tag => (
            <button
              key={tag.label}
              onClick={() => handleTagToggle(tag.label)}
              className={`${styles.tagBtn} ${
                selectedTags.includes(tag.label) ? styles.tagBtnActive : ''
              }`}
            >
              {tag.label} ({tag.count})
            </button>
          ))}
        </div>
        
        {(searchTerm || selectedTags.length > 0) && (
          <button onClick={clearFilters} className={styles.clearBtn}>
            清除筛选
          </button>
        )}
      </div>

      <div className={styles.filterStats}>
        共找到 {posts.length} 篇文章
        {(searchTerm || selectedTags.length > 0) && (
          <span className={styles.filteredCount}>
            （筛选后显示 {filteredCount} 篇）
          </span>
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
