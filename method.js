// let obj = {
//     a: 2,
//     b: function(){
//         return this.a + 5
//     }
// }

// console.log(obj.a) // 2
// console.log(obj.b()) // 7

// console.log('\n')

// let inherited = Object.create(obj)

// console.log(inherited.a) // 2
// console.log(inherited.b()) // 7

// console.log('\n')

// inherited.a = function(){return this.b + 10}
// inherited.b = 10;

// console.log(inherited.a()) // 20
// console.log(inherited.b) // 10

// function method(a, b) {
//     this.a = a;
//     this.b = b;
// }

// method.prototype.print = function () {
//     let obj = {
//         prints: () => {
//             return [this.a, this.b, 'hi'];
//         },
//     };
//     return obj;
// };

// var call = new method(10, 20);

// console.log(call.print().prints()) // [10, 20, 'hi']

function parent() {}
parent.prototype.val = 20
parent.val = 10
parent.__proto__.value = 30
var x = new parent()
console.log(x)

console.log(parent.val) //10
console.log(parent.prototype.val) // 20
console.log(parent.__proto__.value) // 30