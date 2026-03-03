const findmax=(no1,no2)=>no1>no2?no1:no2
var max = findmax(100,20)
console.log("max = ",max)

//check if string contains space or not !!

//const isSpace = (name)=>name.includes(" ")
//const isSpace = (name)=>name.includes(" ")==true ? "YES" :"NO"
const isSpace = (name)=>name.includes(" ") ? "YES" :"NO"
var ans = isSpace("amit_mishra")
console.log("ans = ",ans)