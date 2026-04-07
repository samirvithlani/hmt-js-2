// var student = {
//     name:"raj",
//     age:23
// }

var students =[
    {id:101,name:"amit",age:23},
    {id:102,name:"parth",age:24},
    {id:103,name:"raj",age:25},
]
console.log(students)

// for(let i=0;i<students.length;i++){
//     console.log(students[i].id," - ",students[i].name," - ",students[i].age)
// }

students.forEach((stu)=>{
    console.log(stu.id,stu.name,stu.age)
})

//WITHOUT MAP:
var studentName =[]
for(let i=0;i<students.length;i++){
    studentName.push(students[i].name)
}
console.log(studentName)

//with map

var studentName1 = students.map((stu)=>stu.name.toUpperCase())
console.log(studentName1)

//{id:1000,name:upper,age+1}

var updatedStudents = students.map((stu)=>{
    return {
        id:stu.id+1000,
        name:stu.name.toUpperCase(),
        age:stu.age+1
    }
})
console.log(updatedStudents)