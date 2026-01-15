import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import './styles.css';

export default function FoodThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleToggle = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <label className="switch-food" title={isDark ? '切换到亮色模式' : '切换到暗色模式'}>
      <input 
        type="checkbox" 
        className="switch-input" 
        checked={isDark}
        onChange={handleToggle}
      />
      <div className="switch-track">
        <div className="switch-knob">
          <div className="burger-container">
            <div className="bun-top"><div className="seeds"></div></div>
            <div className="lettuce"></div>
            <div className="patty"></div>
            <div className="bun-bottom"></div>
          </div>

          <div className="fries-container">
            <div className="fry-box">
              <div className="fry f1"></div>
              <div className="fry f2"></div>
              <div className="fry f3"></div>
              <div className="fry f4"></div>
              <div className="fry f5"></div>
              <div className="fry f6"></div>
              <div className="fry f7"></div>

              <div className="box-face front"></div>
              <div className="box-face back"></div>
              <div className="box-face right"></div>
              <div className="box-face left"></div>
              <div className="box-face bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
