import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function Comments() {
  const {colorMode} = useColorMode();

  return (
    <div style={{marginTop: '2rem'}}>
      <Giscus
        id="comments"
        repo="Chujie-cre/blog"
        repoId="R_kgDOQ1v46w"
        category="General"
        categoryId="DIC_kwDOQ1v4684C0tF3"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
