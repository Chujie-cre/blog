import React, { useId } from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import './styles.css';

const DIFFICULTY_LEVELS = ['easy', 'middle', 'hard'];

export function DifficultyBadge({difficulty, showLabel = true, size = 'normal'}) {
  const {difficulty: difficultyData} = usePluginData('blog-meta-plugin') || {};
  const uniqueId = useId();
  
  if (!difficulty || !difficultyData) {
    return null;
  }

  const sizeClass = size === 'small' ? 'comic-small' : '';
  const currentIndex = DIFFICULTY_LEVELS.indexOf(difficulty);
  const difficultyClass = `difficulty-${difficulty}`;

  return (
    <div className={`comic-radio-group ${sizeClass} ${difficultyClass}`} title={difficultyData[difficulty]?.description}>
      {DIFFICULTY_LEVELS.map((level, index) => {
        const config = difficultyData[level];
        if (!config) return null;
        const inputId = `${uniqueId}-comic-${level}`;
        
        return (
          <React.Fragment key={level}>
            <input 
              type="radio" 
              name={`difficulty-${uniqueId}`}
              id={inputId}
              checked={difficulty === level}
              readOnly
            />
            <label htmlFor={inputId}>{config.label}</label>
          </React.Fragment>
        );
      })}
      <div 
        className="comic-glider" 
        style={{'--glider-index': currentIndex}}
      />
    </div>
  );
}

export function PrerequisitesBadges({prerequisites, showLabel = true, size = 'normal'}) {
  const {prerequisites: prerequisitesData} = usePluginData('blog-meta-plugin') || {};
  
  if (!prerequisites || !Array.isArray(prerequisites) || prerequisites.length === 0) {
    return null;
  }

  if (!prerequisitesData) {
    return null;
  }

  const sizeClass = size === 'small' ? 'badge-small' : '';

  return (
    <div className={`prerequisites-badges ${sizeClass}`}>
      {showLabel && <span className="prerequisites-label">📚 前置知识:</span>}
      <div className="prerequisites-list">
        {prerequisites.map((prereq) => {
          const config = prerequisitesData[prereq];
          if (!config) {
            return (
              <span key={prereq} className="prerequisite-badge">
                {prereq}
              </span>
            );
          }
          
          if (config.url) {
            return (
              <Link 
                key={prereq} 
                to={config.url} 
                className="prerequisite-badge prerequisite-link"
                title={config.description}
              >
                {config.label}
              </Link>
            );
          }
          
          return (
            <span 
              key={prereq} 
              className="prerequisite-badge"
              title={config.description}
            >
              {config.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function HowSection({how}) {
  if (!how || !Array.isArray(how) || how.length === 0) {
    return null;
  }

  return (
    <div className="how-section">
      <div className="how-header">
        <span className="how-icon">🎯</span>
        <span className="how-title">通过本文你将学到</span>
      </div>
      <ul className="how-list">
        {how.map((item, index) => (
          <li key={index} className="how-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function LastUpdateInfo({lastUpdate, editUrl}) {
  if (!lastUpdate) {
    return null;
  }

  const {date, author} = lastUpdate;
  const formattedDate = date ? new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : null;

  return (
    <div className="last-update-row">
      <div className="last-update-info">
        <span className="last-update-icon">📝</span>
        <span className="last-update-text">
          最后更新于 {formattedDate}
          {author && <span className="last-update-author"> · {author}</span>}
        </span>
      </div>
      {editUrl && (
        <Link to={editUrl} className="edit-page-link">
          ✏️ 编辑此页
        </Link>
      )}
    </div>
  );
}

export function BlogMetaBadges({difficulty, prerequisites, layout = 'horizontal', size = 'normal'}) {
  const hasDifficulty = !!difficulty;
  const hasPrerequisites = prerequisites && Array.isArray(prerequisites) && prerequisites.length > 0;

  if (!hasDifficulty && !hasPrerequisites) {
    return null;
  }

  return (
    <div className={`blog-meta-badges layout-${layout}`}>
      {hasDifficulty && <DifficultyBadge difficulty={difficulty} size={size} />}
      {hasPrerequisites && <PrerequisitesBadges prerequisites={prerequisites} size={size} />}
    </div>
  );
}

export default BlogMetaBadges;
