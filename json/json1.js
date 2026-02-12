// var studenrName ="amit"
// var age = 23
// //..........25
// console.log(studenrName)
// console.log(age)

//object wrap :JSON javascript object notation
//{key:value}

var student = {
    name:"ajay",
    age:23,
    gender:"male",
    marks:87,
    // city:"Ahm",
    // state:"Guj"
    address:{
        city:"Ahm",
        state:"Guj"
    }
}
console.log(student)
console.log(student.name)
console.log(student.age)
//..
console.log(student.city) //undefined
console.log(student.state)
console.log(student.address.city)
console.log(student.address.state)
