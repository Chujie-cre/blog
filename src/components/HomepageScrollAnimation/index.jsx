import React from 'react';
import LogoLoop from '@site/src/components/LogoLoop';
import styles from './styles.module.css';

const logos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', alt: 'C++' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://res.cloudinary.com/dh61ilhsq/image/upload/v1767949819/esp32_tnrjnp.svg', alt: 'esp32' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', alt: 'vue3' },
  { src: 'https://www.espressif.com/sites/all/themes/espressif/logo-black.svg', alt: '乐鑫' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'VS Code' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'postgresql' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', alt: 'PhotoShop' },
  { src: 'https://sf16-web-tos-buz.capcutcdn-us.com/obj/capcut-web-buz-tx/common/images/lv_web-2.ico', alt: 'capcut' },
];

export default function HomepageScrollAnimation() {
  return (
    <section className={styles.scrollAnimation}>
      <LogoLoop
        logos={logos}
        speed={60}
        direction="left"
        pauseOnHover={true}
        gap={80}
        logoHeight={48}
        fadeOut={true}
        scaleOnHover={true}
      />
    </section>
  );
}
