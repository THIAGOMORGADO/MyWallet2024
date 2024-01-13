module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugin: [
      ["module-resolver", {
        "root": ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        "alias": {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@config": "./src/config",
          "@hooks": "./src/hooks",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@styles": "./src/styles",
          "@utils": "./src/utils",
          "@routes": "./src/routes"
        }
      }]
    ]
  };
};
