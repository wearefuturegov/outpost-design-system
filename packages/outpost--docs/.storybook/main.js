module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  refs: (config, { configType }) => {
    if (configType === "DEVELOPMENT") {
      return {
        primitives: {
          title: "Outpost primitives",
          url: "http://localhost:6002",
        },
        css: {
          title: "Outpost CSS",
          url: "http://localhost:6003",
        },
        react: {
          title: "Outpost React",
          url: "http://localhost:6004",
        },
      };
    }
    // return {
    //   react: {
    //     title: 'Composed React Storybook running in production',
    //     url: 'https://your-production-react-storybook-url',
    //   },
    //   angular: {
    //     title: 'Composed Angular Storybook running in production',
    //     url: 'https://your-production-angular-storybook-url',
    //   },
    // };
  },
};
