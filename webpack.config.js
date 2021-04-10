module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["thread-loader", "source-map-loader"],
      },
    ],
  },
};
