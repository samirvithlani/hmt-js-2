const add =()=>{
    console.log("addition called...")
    return 100
}

//var ans = add() // function -- ()
var ans  = add // no () 
console.log("ans..",ans)
ans()


const avg = (a,b)=>(a+b)/2

//var ans1 = avg(10,20)
var ans1 = avg
console.log("ans1 ",ans1)
//ans1 == avg --> ans1 will act as avg function
var x = ans1(100,20)
console.log(x)



