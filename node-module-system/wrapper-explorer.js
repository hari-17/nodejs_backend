console.log("Node module Wrapper Demo");

console.log('__filename in exploere',__filename);
console.log('__dirname in explorer',__dirname);


module.exports.greet = (name) =>{
    console.log(`Hello ${name}`);
}
