let obj = {
    a: 2,
    b: function(){
        return this.a + 5
    }
}

console.log(obj.a) // 2
console.log(obj.b()) // 7

console.log('\n')

let inherited = Object.create(obj)

console.log(inherited.a) // 2
console.log(inherited.b()) // 7


console.log('\n')


inherited.a = function(){return this.b + 10}
inherited.b = 10;

console.log(inherited.a()) // 20
console.log(inherited.b) // 10