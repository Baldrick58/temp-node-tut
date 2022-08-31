// Modules - Encpsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')

// console.log(names)

// Bringing in a module that has a function will run automatically
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
