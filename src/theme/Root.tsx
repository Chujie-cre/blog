import React, { useEffect } from 'react';
import TargetCursor from '@site/src/components/TargetCursor';

export default function Root({ children }) {
  useEffect(() => {
    // 防止重复注入
    if (document.getElementById('pop-llm-sdk')) return;

    const script = document.createElement('script');
    script.id = 'pop-llm-sdk';
    script.src = 'https://connect.popllm.com/sdk.js';
    script.async = true;
    script.setAttribute('data-key', 'e30fa99fd60f4dc9');

    document.body.appendChild(script);

    script.onload = () => {
      console.log('[Pop] SDK loaded');
    };
    script.onerror = () => {
      console.error('[Pop] SDK load failed');
    };
  }, []);

  return (
    <>
      <TargetCursor targetSelector=".cursor-target, a, button" />
      {children}
    </>
  );
}
