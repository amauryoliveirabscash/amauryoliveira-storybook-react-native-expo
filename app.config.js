export default ({ config }) => ({
  ...config,
  name: "Amauryoliveira Storybook React Native Expo",
  slug: "amauryoliveira-storybook-react-native-expo",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
