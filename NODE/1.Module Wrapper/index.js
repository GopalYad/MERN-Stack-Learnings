//module wrapper

console.log('hello node js')

//IIFE Function -> when we do code exection happens after wrapping with iffe function
// (function(exports, require, module, __filename, __dirname) {
//     console.log('Hello from IIFE');
//  })();

//This structure wraps a function in parentheses and immediately invokes it with (). 
// The purpose of this is to create a local scope for variables and avoid polluting the global scope.
 console.log(__filename)
 console.log(__dirname)