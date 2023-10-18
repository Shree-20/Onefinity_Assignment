module.exports = {
    // ...
    resolve: {
        fallback: {
          util: require.resolve("util/")
        }
    },
    // ...
    
    resolve: {
        fallback: { "url": require.resolve("url/") }
      }
  };