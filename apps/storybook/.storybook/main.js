/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    // "../../../packages/ui/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)",
    "../node_modules/ui/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  babel: async (options) => {
    options.presets.push("@emotion/babel-preset-css-prop");
    return options;
  },
};
export default config;
