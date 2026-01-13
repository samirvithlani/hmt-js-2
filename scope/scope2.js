let x = 100
console.log("value of x outside of block = ",x)

{
    console.log("value of x inside block =",x)
    let y = 111
    console.log("value of y inside block = ",y)
}

console.log("value of y outside block = ",y) //error...