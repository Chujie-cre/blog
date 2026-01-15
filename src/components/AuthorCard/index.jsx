import React, { useState } from 'react';
import { Github, Mail, Smile } from 'lucide-react';
import './styles.css';

const socialIconMap = {
  GitHub: Github,
  Email: Mail,
};

export default function AuthorCard({
  avatar = './static/me.png',
  name = 'Simple Code',
  subtitle = '分享技术与生活',
  motto = '代码改变世界',
  description = '恭喜发现**宝藏**。',
  socialLinks = []
}) {
  const [isHovered, setIsHovered] = useState(false);

  // 解析描述文本中的粗体标记
  const parseDescription = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // 按换行分段
  const paragraphs = description.split('\n\n');

  return (
    <div 
      className={`author-card ${isHovered ? 'author-card--expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 顶部标语 */}
      <div className="author-card__motto">
        {motto}
      </div>

      {/* 头像区域 - 默认显示 */}
      <div className={`author-card__avatar-section ${isHovered ? 'hidden' : ''}`}>
        <div className="author-card__avatar">
          <img src={avatar} alt={name} />
          <span className="author-card__status"><Smile size={16} /></span>
        </div>
      </div>

      {/* 展开内容 - hover时显示 */}
      <div className={`author-card__expanded-content ${isHovered ? 'visible' : ''}`}>
        {paragraphs.map((para, index) => (
          <p key={index}>{parseDescription(para)}</p>
        ))}
      </div>

      {/* 底部信息 - 始终显示 */}
      <div className="author-card__footer">
        <div className="author-card__info">
          <h3 className="author-card__name">{name}</h3>
          <p className="author-card__subtitle">{subtitle}</p>
        </div>
        {socialLinks.length > 0 && (
          <div className="author-card__social">
            {socialLinks.map((link, index) => {
              const IconComponent = socialIconMap[link.label];
              return (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-card__social-link"
                  title={link.label}
                >
                  {IconComponent ? <IconComponent size={18} /> : link.icon}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
