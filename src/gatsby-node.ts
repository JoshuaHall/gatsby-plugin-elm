import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (
  { actions, stage },
  // @ts-ignore
  { plugins, ...elmOptions }
) => {
  const isDev = stage === "develop";

  const elmLoader = {
    loader: require.resolve("elm-webpack-loader"),
    options: {
      debug: isDev,
      forceWatch: isDev,
      optimize: !isDev,
      ...elmOptions,
    },
  };

  const elmRule = {
    test: /\.elm$/,
    exclude: [/[/\\\\]elm-stuff[/\\\\]/, /[/\\\\]node_modules[/\\\\]/],
    loader: elmLoader,
  };

  actions.setWebpackConfig({
    module: {
      rules: [elmRule],
    },
  });
};
