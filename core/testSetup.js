// This file isn't transpiled, so must use CommonJS and ES5
// Register Babel to transpile before our tests run.
require('@babel/register')();

// Disable webpack features that Mocha doesn't know (treat like empty function)
require.extensions['.css'] = function() {};
