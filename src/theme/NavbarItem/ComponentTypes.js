import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import React from 'react';
import StaggeredMenu from '@site/src/components/StaggeredMenu';

function MenuButton() {
  return (
    <StaggeredMenu
      position="right"
      colors={['#B19EEF', '#8B5CF6']}
      accentColor="#8B5CF6"
      menuButtonColor="var(--ifm-navbar-link-color)"
      openMenuButtonColor="#000"
      items={[
        { label: '首页', link: '/' },
        { label: '文档', link: '/docs/intro' },
        { label: '博客', link: '/blog' },
        { label: '标签', link: '/blog/tags' },
      ]}
      socialItems={[
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'Twitter', link: 'https://twitter.com' },
      ]}
      displaySocials={true}
      displayItemNumbering={true}
      isFixed={false}
      closeOnClickAway={true}
    />
  );
}

export default {
  ...ComponentTypes,
  'custom-menuButton': MenuButton,
};
