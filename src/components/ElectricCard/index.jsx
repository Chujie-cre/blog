import React from 'react';
import Link from '@docusaurus/Link';
import ElectricBorder from './ElectricBorder';
import './styles.css';

export default function ElectricCard({ title, description, image, tags, date, readingTime, permalink }) {
  return (
    <Link to={permalink} className="electric-card-link">
      <ElectricBorder 
        color="var(--ifm-color-primary)" 
        speed={1} 
        chaos={0.1} 
        borderRadius={16}
        className="electric-card"
      >
        <div className="electric-card-content">
          {image && (
            <div className="electric-card-image">
              <img src={image} alt={title} />
            </div>
          )}
          <div className="electric-card-body">
            <h3 className="electric-card-title">{title}</h3>
            {description && (
              <p className="electric-card-description">{description}</p>
            )}
            <div className="electric-card-meta">
              {date && <span className="electric-card-date">{date}</span>}
              {readingTime && <span className="electric-card-reading">· {Math.ceil(readingTime)} 分钟阅读</span>}
            </div>
            {tags && tags.length > 0 && (
              <div className="electric-card-tags">
                {tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="electric-card-tag">
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </ElectricBorder>
    </Link>
  );
}
