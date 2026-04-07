var companies = [
  {
    name: "Google",
    employees: [
      { name: "Sundar Pichai", salary: 1000000, post: "CEO" },
      {name:"Sergey",salary:2000000,post:"Founder"},
      {name:"Larry",salary:2100000,post:"Founder"}
    ],
  },
  {
    name: "FaceBook",
    employees: [
      { name: "Mark", salary: 2000000, post: "CEO" },
      {name:"Zuke",salary:3000000,post:"Founder"},
      {name:"Peter",salary:3100000,post:"Founder"}
    ],
  },
  {
    name: "Reliance",
    employees: [
      { name: "Mukesh Ambani", salary: 1000000, post: "CEO" },
      {name:"Dhirubhai ",salary:2400000,post:"Founder"},
      {name:"Kokila",salary:100000,post:"Founder"}
    ],
  },
];

//find all employees reliance compnay :
//find All Founders of Facebook and print names only

var emps = companies.find((com)=>com.name =="Reliance").employees.map((emp)=>emp.name)
console.log(emps)

//find all Founders

var found = companies.map((c)=>c.employees).flatMap((e)=>e.filter((e1)=>e1.post=="Founder")).map((e2)=>e2.name)
console.log(found)
