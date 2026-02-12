function greet(){
    console.log("Hello all")
}
greet() //no retuen type no arg

//let var const ->no
//by default it is let
function greet2(name){
    console.log("Hello ",name)
}
greet2("raj")
greet2()//no pram -->No error* it will call a function

function add(a,b){
    console.log("add",a+b)
}
add(10,20)