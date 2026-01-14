const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

module.exports = function blogMetaPlugin(context, options) {
  return {
    name: 'blog-meta-plugin',

    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      
      // 加载 difficulty.yml
      let difficultyData = {};
      const difficultyPath = path.join(blogDir, 'difficulty.yml');
      if (fs.existsSync(difficultyPath)) {
        const content = fs.readFileSync(difficultyPath, 'utf8');
        difficultyData = yaml.load(content) || {};
      }

      // 加载 prerequisites.yml
      let prerequisitesData = {};
      const prerequisitesPath = path.join(blogDir, 'prerequisites.yml');
      if (fs.existsSync(prerequisitesPath)) {
        const content = fs.readFileSync(prerequisitesPath, 'utf8');
        prerequisitesData = yaml.load(content) || {};
      }

      return {
        difficulty: difficultyData,
        prerequisites: prerequisitesData,
      };
    },

    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      setGlobalData(content);
    },
  };
};
