#!/usr/bin/env node

console.log("node-" + process.platform + '-' + process.arch + '@' + require('./package.json').version);
