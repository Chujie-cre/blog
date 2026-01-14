import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import React from 'react';
import LinksMenu from '@site/src/components/LinksMenu';
import FoodThemeToggle from '@site/src/components/FoodThemeToggle';

function MenuButton() {
  return (
    <LinksMenu
      logo="🎯"
      title="Simple Code"
      links={{
        博客: [
          { label: '主页', link: '/', icon: '🏠' },
          { label: '博客', link: '/blog', icon: '📝' },
          { label: '归档', link: '/blog/archive', icon: '📚' },
          { label: '标签', link: '/blog/tags', icon: '🏷️' },
        ],
        应用: [
          { label: '文档', link: '/docs/intro', icon: '📖' },
        ],
        服务: [
          { label: 'GitHub', link: 'https://github.com/Chujie-cre/blog', icon: '🐙', external: true },
        ],
      }}
    />
  );
}

function ThemeToggle() {
  return <FoodThemeToggle />;
}

export default {
  ...ComponentTypes,
  'custom-menuButton': MenuButton,
  'custom-themeToggle': ThemeToggle,
};
