import React from 'react';
import Link from '@docusaurus/Link';
import { Shuffle } from 'lucide-react';
import './styles.css';

export default function HotPosts({ posts = [], title = '随机推荐', maxCount = 5, icon = null }) {
  // 取前N篇文章
  const displayPosts = posts.slice(0, maxCount);

  if (displayPosts.length === 0) {
    return null;
  }

  return (
    <div className="hot-posts">
      <h3 className="hot-posts__title">
        {icon || <Shuffle size={18} />}
        <span>{title}</span>
      </h3>
      <ul className="hot-posts__list">
        {displayPosts.map((post, index) => (
          <li key={post.permalink} className="hot-posts__item">
            <Link to={post.permalink} className="hot-posts__link">
              <span className={`hot-posts__rank hot-posts__rank--${index + 1}`}>
                {index + 1}
              </span>
              <div className="hot-posts__content">
                <span className="hot-posts__post-title">{post.title}</span>
                {post.description && (
                  <span className="hot-posts__description">{post.description}</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
