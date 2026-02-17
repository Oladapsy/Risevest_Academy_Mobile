// Learn more https://docs.expo.io/guides/customizing-metro

// the code copied from the docs above and modified to include nativewind
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/globals.css' })