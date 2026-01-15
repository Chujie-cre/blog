import React, { useMemo, useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import ChromaGrid from '@site/src/components/ChromaGrid';
import RotatingText from '@site/src/components/RotatingText';
import FlowingMenu from '@site/src/components/FlowingMenu';
import FeedbackModal from '@site/src/components/FeedbackModal';
import { Coffee, Mail, Eye, BookOpen, GraduationCap } from 'lucide-react';
import styles from './styles.module.css';

export default function HomepageLinks() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  
  const gridItems = useMemo(() => [
    {
      image: '/img/blog-1.svg',
      title: translate({ id: 'homepage.links.card.start.title', message: '开始使用', description: 'Homepage card title: Getting started' }),
      subtitle: translate({ id: 'homepage.links.card.start.subtitle', message: '快速入门指南', description: 'Homepage card subtitle: Quick start' }),
      handle: translate({ id: 'homepage.links.card.start.handle', message: '教程', description: 'Homepage card badge: tutorials' }),
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
      url: '/docs/intro'
    },
    {
      image: '/img/blog-2.svg',
      title: translate({ id: 'homepage.links.card.blog.title', message: '博客文章', description: 'Homepage card title: blog posts' }),
      subtitle: translate({ id: 'homepage.links.card.blog.subtitle', message: '技术分享与笔记', description: 'Homepage card subtitle: blog summary' }),
      handle: translate({ id: 'homepage.links.card.blog.handle', message: '博客', description: 'Homepage card badge: blog' }),
      borderColor: '#3B82F6',
      gradient: 'linear-gradient(210deg, #3B82F6, #000)',
      url: '/blog'
    },
    {
      image: '/img/blog-3.svg',
      title: translate({ id: 'homepage.links.card.tags.title', message: '标签分类', description: 'Homepage card title: tags' }),
      subtitle: translate({ id: 'homepage.links.card.tags.subtitle', message: '按标签浏览内容', description: 'Homepage card subtitle: browse by tags' }),
      handle: translate({ id: 'homepage.links.card.tags.handle', message: '标签', description: 'Homepage card badge: tags' }),
      borderColor: '#EC4899',
      gradient: 'linear-gradient(165deg, #EC4899, #000)',
      url: '/blog/tags'
    },
    {
      image: '/img/blog-4.svg',
      title: translate({ id: 'homepage.links.card.archive.title', message: '归档', description: 'Homepage card title: archive' }),
      subtitle: translate({ id: 'homepage.links.card.archive.subtitle', message: '按时间浏览文章', description: 'Homepage card subtitle: browse archive' }),
      handle: translate({ id: 'homepage.links.card.archive.handle', message: '归档', description: 'Homepage card badge: archive' }),
      borderColor: '#10B981',
      gradient: 'linear-gradient(195deg, #10B981, #000)',
      url: '/blog/archive'
    },
    {
      image: '/img/blog-5.svg',
      title: translate({ id: 'homepage.links.card.docs.title', message: '评价', description: 'Homepage card title: docs' }),
      subtitle: translate({ id: 'homepage.links.card.docs.subtitle', message: '觉得本站怎么样？', description: 'Homepage card subtitle: docs' }),
      handle: translate({ id: 'homepage.links.card.docs.handle', message: '评价', description: 'Homepage card badge: docs' }),
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(225deg, #F59E0B, #000)',
      isFeedback: true
    },
    // {
    //   image: '/img/blog-6.svg',
    //   title: translate({ id: 'homepage.links.card.about.title', message: '关于', description: 'Homepage card title: about' }),
    //   subtitle: translate({ id: 'homepage.links.card.about.subtitle', message: '了解更多', description: 'Homepage card subtitle: about' }),
    //   handle: translate({ id: 'homepage.links.card.about.handle', message: '关于', description: 'Homepage card badge: about' }),
    //   borderColor: '#06B6D4',
    //   gradient: 'linear-gradient(135deg, #06B6D4, #000)',
    //   url: '/docs/intro'
    // },
    // {
    //   image: '/img/blog-1.svg',
    //   title: translate({ id: 'homepage.links.card.community.title', message: '社区', description: 'Homepage card title: community' }),
    //   subtitle: translate({ id: 'homepage.links.card.community.subtitle', message: '加入讨论交流', description: 'Homepage card subtitle: community' }),
    //   handle: translate({ id: 'homepage.links.card.community.handle', message: '社区', description: 'Homepage card badge: community' }),
    //   borderColor: '#8B5CF6',
    //   gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    //   url: '/blog'
    // },
    // {
    //   image: '/img/blog-2.svg',
    //   title: translate({ id: 'homepage.links.card.projects.title', message: '项目', description: 'Homepage card title: projects' }),
    //   subtitle: translate({ id: 'homepage.links.card.projects.subtitle', message: '开源项目展示', description: 'Homepage card subtitle: projects' }),
    //   handle: translate({ id: 'homepage.links.card.projects.handle', message: '项目', description: 'Homepage card badge: projects' }),
    //   borderColor: '#3B82F6',
    //   gradient: 'linear-gradient(210deg, #3B82F6, #000)',
    //   url: '/docs/intro'
    // },
    // {
    //   image: '/img/blog-3.svg',
    //   title: translate({ id: 'homepage.links.card.tools.title', message: '工具', description: 'Homepage card title: tools' }),
    //   subtitle: translate({ id: 'homepage.links.card.tools.subtitle', message: '实用工具推荐', description: 'Homepage card subtitle: tools' }),
    //   handle: translate({ id: 'homepage.links.card.tools.handle', message: '工具', description: 'Homepage card badge: tools' }),
    //   borderColor: '#EC4899',
    //   gradient: 'linear-gradient(165deg, #EC4899, #000)',
    //   url: '/blog'
    // },
    // {
    //   image: '/img/blog-4.svg',
    //   title: translate({ id: 'homepage.links.card.resources.title', message: '资源', description: 'Homepage card title: resources' }),
    //   subtitle: translate({ id: 'homepage.links.card.resources.subtitle', message: '学习资源分享', description: 'Homepage card subtitle: resources' }),
    //   handle: translate({ id: 'homepage.links.card.resources.handle', message: '资源', description: 'Homepage card badge: resources' }),
    //   borderColor: '#10B981',
    //   gradient: 'linear-gradient(195deg, #10B981, #000)',
    //   url: '/docs/intro'
    // },
    // {
    //   image: '/img/blog-5.svg',
    //   title: translate({ id: 'homepage.links.card.contact.title', message: '联系', description: 'Homepage card title: contact' }),
    //   subtitle: translate({ id: 'homepage.links.card.contact.subtitle', message: '合作与交流', description: 'Homepage card subtitle: contact' }),
    //   handle: translate({ id: 'homepage.links.card.contact.handle', message: '联系', description: 'Homepage card badge: contact' }),
    //   borderColor: '#F59E0B',
    //   gradient: 'linear-gradient(225deg, #F59E0B, #000)',
    //   url: '/blog'
    // },
    {
      image: '/img/blog-6.svg',
      title: translate({ id: 'homepage.links.card.support.title', message: '支持', description: 'Homepage card title: support' }),
      subtitle: translate({ id: 'homepage.links.card.support.subtitle', message: '支持我的创作', description: 'Homepage card subtitle: support' }),
      handle: translate({ id: 'homepage.links.card.support.handle', message: '支持', description: 'Homepage card badge: support' }),
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      	url: '/docs/intro'
    }
  ], []);

  return (
    <section className={styles.links}>
      <div className={styles.leftCol}>
        <div className={styles.statsGrid}>
          <a href="https://afdian.com/a/CJKing" target="_blank" rel="noopener noreferrer" className={styles.statItem}>
            <div className={styles.statIcon}><Coffee size={24} /></div>
            <div className={styles.statLabel}>
              <Translate id="homepage.links.stats.sponsor" description="Stat label for sponsor link">
                爱发电赞助
              </Translate>
            </div>
          </a>
          <div className={styles.statItem} onClick={() => document.getElementById('contactForm').style.display = document.getElementById('contactForm').style.display === 'block' ? 'none' : 'block'}>
            <div className={styles.statIcon}><Mail size={24} /></div>
            <div className={styles.statLabel}>
              <Translate id="homepage.links.stats.contact" description="Stat label for contact toggler">
                合作联系
              </Translate>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              <span id="busuanzi_container_site_pv">
                <span id="busuanzi_value_site_pv">--</span>
              </span>
            </div>
            <div className={styles.statLabel}>
              <Translate id="homepage.links.stats.visitors" description="Stat label for visitor count">
                网站访问量
              </Translate>
            </div>
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
                placeholder={translate({ id: 'homepage.links.form.email.placeholder', message: '输入您的邮箱', description: 'Contact form email placeholder' })}
                className={styles.emailInput}
                required 
              />
              <textarea 
                name="message" 
                placeholder={translate({ id: 'homepage.links.form.message.placeholder', message: '请简述您的合作需求...', description: 'Contact form message placeholder' })}
                className={styles.messageInput}
                rows="3"
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              <Translate id="homepage.links.form.submit" description="Contact form submit button">
                发送
              </Translate>
            </button>
          </form>
        </div>

        <div style={{ height: '320px', margin: '2rem 0' }}>
          <FlowingMenu 
            items={[
              { 
                link: '/blog', 
                text: translate({ id: 'homepage.links.flowing.item1', message: '专注前端技术分享', description: 'Flowing menu item text 1' }),
                image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop'
              },
              { 
                link: '/docs/intro', 
                text: translate({ id: 'homepage.links.flowing.item2', message: '系统化学习路径', description: 'Flowing menu item text 2' }),
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
              },
              { 
                link: '/blog', 
                text: translate({ id: 'homepage.links.flowing.item3', message: '最新技术趋势跟踪', description: 'Flowing menu item text 3' }),
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop'
              },
              { 
                link: '/docs/intro', 
                text: translate({ id: 'homepage.links.flowing.item4', message: '实战项目经验分享', description: 'Flowing menu item text 4' }),
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
            <BookOpen size={18} className={styles.btnIcon} />
            <Translate id="homepage.links.actions.blog" description="Action button to browse articles">
              浏览文章
            </Translate>
          </a>
          <a href="/docs/intro" className={styles.actionBtn}>
            <GraduationCap size={18} className={styles.btnIcon} />
            <Translate id="homepage.links.actions.docs" description="Action button to study docs">
              学习教程
            </Translate>
          </a>
        </div>
      </div>
      <div className={styles.rightCol}>
        <ChromaGrid 
          items={gridItems} 
          columns={3} 
          rows={4} 
          radius={180} 
          onFeedbackClick={() => setIsFeedbackOpen(true)}
        />
      </div>
      
      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </section>
  );
}
