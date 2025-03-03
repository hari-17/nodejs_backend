const lodash = require('lodash');

const name = ['Hari','John','Sumi'];

const capitalize = lodash.map(name,lodash.capitalize);
console.log(capitalize);
