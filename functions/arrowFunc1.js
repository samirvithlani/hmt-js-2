function add(){
    console.log("No return type no argument..")
}
add()

//arrow functio version

const add1 = ()=>{
    console.log("No retuen type No argument arrow function")
}

add1()

function avg(a,b,c){
    console.log("average of a b c")
    console.log((a+b+c)/3)
}
avg(1,2,3)
//arrow version

const avg1 = (a,b,c)=>{
    console.log("average of a b c using arrow")
    console.log((a+b+c)/3)
}

avg1(1,2,3)

// --> return type..

function findsum(no1,no2){
    return no1 + no2
}
var ans = findsum(10,20)
console.log("ans = ",ans)

//arrow version
const findsum1 = (no1,no2)=>{
    return no1 + no2
}
var ans = findsum1(100,200)
console.log("ans = ",ans)

//arrow function in single line

//if no {} brace then no return keyword
const findsum2 = (no1,no2)=>no1+no2;
var ans = findsum2(1000,2000)
console.log(ans)

const getFullName = (fname,lname)=>fname + " "+ lname

var fullname = getFullName("raj","patel")
console.log("full name",fullname)