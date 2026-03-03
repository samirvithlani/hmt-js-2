var no1 =10,no2=20

//if else
if(no1>no2){
    console.log("no1 is greater..")
}    
else{
    console.log("no2 is greater")
}

//ternop ver

no1>no2 ? console.log("no1 is greater") : console.log("no2 is greater")

var x =101
x % 2 ==0 ? console.log("no is even") : console.log("no is odd")


var max =0
if(no1>no2){
    max = no1
}
else{
    max = no2
}
console.log("max no",max)


var max1 = no1 > no2 ? no1 : no2
console.log("max1 = ",max1)


//no11=,no2=30,no3=30
var no1 =10,no2=100,no3=20
var max2 = no1>no2 && no1>no3 ? no1 
          : no2 > no3 ? no2 
          : no3
console.log(max2)         


var pers = 79;

var grade = pers>80?"A"
            : pers>70?"B"
            :pers > 60 ?"C"
            :"FAIL"

console.log(grade)            










