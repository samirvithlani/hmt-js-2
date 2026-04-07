const sales = [100,200,300,400,500,600,700]

//500>
// const filtSales = []

// for(let i=0;i<sales.length;i++){
//     if(sales[i]>500){
//         filtSales.push(sales[i])
//     }
// }

//filter function

var filtSales = sales.filter((s)=>{
    return s>500
})

console.log(filtSales)

var names = ["amit","sumit","raj","parth","neha","mansi"]
var filtNames= names.filter((n)=>n.length>4)

// for(let i=0;i<names.length;i++){
//     if(names[i].length>4){
//         filtNames.push(names[i])
//     }
// }
console.log(filtNames)