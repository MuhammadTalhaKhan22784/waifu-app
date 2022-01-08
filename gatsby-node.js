exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glb)$/i,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
  })
}
