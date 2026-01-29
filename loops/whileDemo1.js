// let i=1;

// while(i<=10){
    
//     console.log(i) 
//     i++  
// }

//count no of digit
var no = 12365 // output -3

// var rem  = no % 10
// console.log("rem",rem)

// //no = no / 10
// no = Math.floor(no/10)
// //console.log("no",no)

// rem = no % 10
// console.log("rem",rem)
// no = Math.floor(no/10)
// //console.log("no",no)

// rem = no % 10
// console.log("rem",rem)
// no = Math.floor(no/10)
// console.log("no",no)

// var no = 6532
var digit =0
while(no>0){

    //rem = no % 10
    digit++
    no = Math.floor(no/10)

}
console.log("digit..",digit)