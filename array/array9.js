var employees = [
    {id:1,name:"amit",salary:10000},
    {id:2,name:"jay",salary:20000},
    {id:3,name:"neha",salary:32000},
    {id:4,name:"parth",salary:10000},
    {id:5,name:"somya",salary:45000},
]

var foundEmployee = employees.find((emp)=>emp.salary==10000);
// for(let i=0;i<employees.length;i++){
//     if(employees[i].salary == 10000){
//         foundEmployee = employees[i]
//         break
//     }
// }

console.log(foundEmployee)