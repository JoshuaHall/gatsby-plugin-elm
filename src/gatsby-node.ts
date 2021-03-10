import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (
  { actions, stage },
  { ...elmOptions }
) => {
  const isDev = stage === "develop";

  const elmLoader = {
    loader: "elm-webpack-loader",
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
