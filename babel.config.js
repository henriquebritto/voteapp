module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expos'],
    env:{
      production:{
        plugins: ['react-native-paper/babel'],
      }
    }
  };
};
