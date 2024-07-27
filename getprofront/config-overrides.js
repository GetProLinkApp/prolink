const path = require('path');

module.exports = function override(config, env) {
  // Modifiez la configuration Webpack pour résoudre les chemins d'image dans les fichiers CSS
  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(innerRule => {
        if (innerRule.test && innerRule.test.toString().includes('css')) {
          innerRule.use.forEach(use => {
            if (use.loader && use.loader.includes('css-loader')) {
              use.options.url = false;
            }
          });
        }
      });
    }
  });

  return config;
};
