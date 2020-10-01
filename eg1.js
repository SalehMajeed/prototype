let f = function proto() {
    this.a = 1;
    this.b = 2;
};

f.prototype.b = 3;
f.prototype.c = 4;
f.prototype.a = 5;

// f.prototype = {
//     x:10,
//     y:30
// } if we run this than prototype chain will break

f.prototype.n = {
    x:10,
    y:30
}

let o = new f();

console.log(o.n) // {x:10 ; y:30}

console.log(o.a) // 1
console.log(o.b) // 2
console.log(o.c) // 4

console.log('\n')

console.log(o.__proto__.a) // 5
console.log(o.__proto__.b) // 3
console.log(o.__proto__.c) // 4


console.log('\n')
console.log(f.prototype.a) // 5
console.log(f.prototype.b) // 3
console.log(f.prototype.c) // 4

let obj = {
    a:1,
    b:2
}
obj.c = 3
console.log(obj)


f.__proto__.a = 10;
console.log(f.a) // 10 it will directly goes into  f___proto__ where a already defined and assign it the value.