const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  entry: {
    index: './src/index.tsx',
    background: './src/background.ts',
    content: './src/content.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
      "@styles": path.resolve(__dirname, 'src/styles'),
      "@public": path.resolve(__dirname, '../public')
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' },
        { from: 'manifest.json' },
      ],
    }),
  ],
};