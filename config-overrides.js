const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "babel-plugin-module-resolver",
    {
      root: ["./src"],
      alias: {
        "@Components": "./src/components",
        "@Utils": "./src/utils",
        "@Modules": "./src/Modules",
        "@Types": "./src/Types",
        "@Helper": "./src/helper",
        "@Mocks": "./src/mocks",
      },
    },
  ])
);
