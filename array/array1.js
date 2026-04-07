//array is group of similar kind of element
//array is group of  of element
//array stores data in index
//c --> js diff
//int a[5] -->size static
//array size dynamic

var x = ["amit","sumit","neha","sneha","jay"]
console.log(x)
console.log(x[0])
console.log(x.length)

for(let i=0;i<x.length;i++){
    console.log(x[i])
}

// var nl = x.push("ajay") //it will add elem at end of an array
// console.log("new length",nl)
x.push("ajay") //it will add elem at end of an array
console.log(x)

x.unshift("parth")
console.log(x)


//remove
var removedElm = x.pop() //it will remove last elme and return it
console.log("removing...",removedElm)
console.log(x)


var removedElm = x.shift() //it will fast  elme and return it
console.log("removing...",removedElm)
console.log(x)
