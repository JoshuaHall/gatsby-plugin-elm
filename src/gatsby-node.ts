import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (
  { actions, stage },
  { ...elmOptions }
) => {
  const isDev = stage === "develop";

  const elmRule = {
    test: /\.elm$/,
    exclude: [/[/\\\\]elm-stuff[/\\\\]/, /[/\\\\]node_modules[/\\\\]/],
    loader: "elm-webpack-loader",
    options: {
      debug: isDev,
      forceWatch: isDev,
      optimize: !isDev,
      ...elmOptions,
    },
  };

  actions.setWebpackConfig({
    module: {
      rules: [elmRule],
    },
  });
};
