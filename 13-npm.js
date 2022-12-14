// npm - global command, comes with node
// npm --version or --v

// local dependency - use it only in this particular project
// npm i (or install) <packageName>

// global dependency - use in any project
// npm install - g <packageName>

// package.json -manifest file (stores important info about project/package)
// manual approach (creat package.json in the root, create properties etc)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log('Hello people')