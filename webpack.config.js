module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./src/App.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /App/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          // These are the specific transformations we'll be using.
          presets: ["latest", "react", "es2015"],
          plugins:['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          //auth0 requires latest
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
