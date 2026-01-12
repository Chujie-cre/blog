import React, { useEffect } from 'react';
import ChromaGrid from '@site/src/components/ChromaGrid';
import RotatingText from '@site/src/components/RotatingText';
import FlowingMenu from '@site/src/components/FlowingMenu';
import styles from './styles.module.css';

const gridItems = [
  {
    image: '/img/blog-1.svg',
    title: '开始使用',
    subtitle: '快速入门指南',
    handle: '教程',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: '/docs/intro'
  },
  {
    image: '/img/blog-2.svg',
    title: '博客文章',
    subtitle: '技术分享与笔记',
    handle: '博客',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(210deg, #3B82F6, #000)',
    url: '/blog'
  },
  {
    image: '/img/blog-3.svg',
    title: '标签分类',
    subtitle: '按标签浏览内容',
    handle: '标签',
    borderColor: '#EC4899',
    gradient: 'linear-gradient(165deg, #EC4899, #000)',
    url: '/blog/tags'
  },
  {
    image: '/img/blog-4.svg',
    title: '归档',
    subtitle: '按时间浏览文章',
    handle: '归档',
    borderColor: '#10B981',
    gradient: 'linear-gradient(195deg, #10B981, #000)',
    url: '/blog/archive'
  },
  {
    image: '/img/blog-5.svg',
    title: '文档',
    subtitle: '详细文档与教程',
    handle: '文档',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(225deg, #F59E0B, #000)',
    url: '/docs/intro'
  },
  {
    image: '/img/blog-6.svg',
    title: '关于',
    subtitle: '了解更多',
    handle: '关于',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #000)',
    url: '/docs/intro'
  },
  {
    image: '/img/blog-1.svg',
    title: '社区',
    subtitle: '加入讨论交流',
    handle: '社区',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: '/blog'
  },
  {
    image: '/img/blog-2.svg',
    title: '项目',
    subtitle: '开源项目展示',
    handle: '项目',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(210deg, #3B82F6, #000)',
    url: '/docs/intro'
  },
  {
    image: '/img/blog-3.svg',
    title: '工具',
    subtitle: '实用工具推荐',
    handle: '工具',
    borderColor: '#EC4899',
    gradient: 'linear-gradient(165deg, #EC4899, #000)',
    url: '/blog'
  },
  {
    image: '/img/blog-4.svg',
    title: '资源',
    subtitle: '学习资源分享',
    handle: '资源',
    borderColor: '#10B981',
    gradient: 'linear-gradient(195deg, #10B981, #000)',
    url: '/docs/intro'
  },
  {
    image: '/img/blog-5.svg',
    title: '联系',
    subtitle: '合作与交流',
    handle: '联系',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(225deg, #F59E0B, #000)',
    url: '/blog'
  },
  {
    image: '/img/blog-6.svg',
    title: '支持',
    subtitle: '支持我的创作',
    handle: '支持',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #000)',
    url: '/docs/intro'
  }
];

export default function HomepageLinks() {
  useEffect(() => {
    // 简单的本地存储访问量统计
    const updateVisitorCount = () => {
      const storageKey = 'simple-code-visitor-count';
      let count = localStorage.getItem(storageKey);
      
      if (!count) {
        // 初始化访问量为一个基数 + 随机数，让数据看起来更真实
        count = Math.floor(Math.random() * 1000) + 5000;
      } else {
        count = parseInt(count, 10) + Math.floor(Math.random() * 3) + 1;
      }
      
      localStorage.setItem(storageKey, count.toString());
      
      const visitorElement = document.getElementById('visitorCount');
      if (visitorElement) {
        // 数字动画效果
        const targetCount = count;
        const currentCount = parseInt(visitorElement.textContent, 10) || 0;
        const increment = Math.ceil((targetCount - currentCount) / 20);
        
        const animateCount = () => {
          const current = parseInt(visitorElement.textContent, 10);
          if (current < targetCount) {
            visitorElement.textContent = Math.min(current + increment, targetCount);
            setTimeout(animateCount, 50);
          }
        };
        
        animateCount();
      }
    };

    // 页面加载时更新访问量
    updateVisitorCount();
    
    // 每隔一段时间模拟访问量增长
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% 概率增长
        updateVisitorCount();
      }
    }, 30000); // 每30秒检查一次

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.links}>
      <div className={styles.leftCol}>
        <div className={styles.statsGrid}>
          <a href="https://afdian.com/a/CJKing" target="_blank" rel="noopener noreferrer" className={styles.statItem}>
            <div className={styles.statIcon}>☕</div>
            <div className={styles.statLabel}>爱发电赞助</div>
          </a>
          <div className={styles.statItem} onClick={() => document.getElementById('contactForm').style.display = document.getElementById('contactForm').style.display === 'block' ? 'none' : 'block'}>
            <div className={styles.statIcon}>📧</div>
            <div className={styles.statLabel}>合作联系</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} id="visitorCount">0</div>
            <div className={styles.statLabel}>网站访问量</div>
          </div>
        </div>

        {/* 邮箱联系表单 */}
        <div id="contactForm" className={styles.contactForm} style={{display: 'none'}}>
          <form 
            className={styles.emailForm}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const email = formData.get('email');
              const message = formData.get('message');
              
              // 使用fetch发送邮件
              fetch('https://formsubmit.co/2425739349@qq.com', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: email,
                  message: message,
                  _subject: '合作咨询 - 来自博客',
                  _captcha: 'false'
                })
              }).then(() => {
                alert('✅ 邮件发送成功！我会尽快回复您。');
                e.target.reset();
                document.getElementById('contactForm').style.display = 'none';
              }).catch(() => {
                alert('❌ 发送失败，请稍后重试。');
              });
            }}
          >
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email" 
                placeholder="输入您的邮箱"
                className={styles.emailInput}
                required 
              />
              <textarea 
                name="message" 
                placeholder="请简述您的合作需求..."
                className={styles.messageInput}
                rows="3"
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>发送</button>
          </form>
        </div>

        <div style={{ height: '320px', margin: '2rem 0' }}>
          <FlowingMenu 
            items={[
              { 
                link: '/blog', 
                text: '专注前端技术分享', 
                image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop'
              },
              { 
                link: '/docs/intro', 
                text: '系统化学习路径', 
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
              },
              { 
                link: '/blog', 
                text: '最新技术趋势跟踪', 
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'
              },
              { 
                link: '/docs/intro', 
                text: '实战项目经验分享', 
                image: 'https://images.unsplash.com/photo-1526925712469-a935c1f2b55f?w=600&h=400&fit=crop'
              }
            ]}
            speed={8}
            textColor="var(--ifm-color-content-primary)"
            bgColor="transparent"
            marqueeBgColor="var(--ifm-color-primary)"
            marqueeTextColor="#ffffff"
            borderColor="var(--ifm-color-emphasis-300)"
          />
        </div>

        <div className={styles.actionButtons}>
          <a href="/blog" className={styles.actionBtn}>
            <span className={styles.btnIcon}>📖</span>
            浏览文章
          </a>
          <a href="/docs/intro" className={styles.actionBtn}>
            <span className={styles.btnIcon}>🎓</span>
            学习教程
          </a>
        </div>
      </div>
      <div className={styles.rightCol}>
        <ChromaGrid items={gridItems} columns={3} rows={4} radius={180} />
      </div>
    </section>
  );
}
