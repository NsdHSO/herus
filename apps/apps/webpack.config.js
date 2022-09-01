const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: "module" },

  // For remotes (please adjust)
  name: "apps",
  filename: "remoteEntry.js",
  exposes: {
      './Module': './apps/apps/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
