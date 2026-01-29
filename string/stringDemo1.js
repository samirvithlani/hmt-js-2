var sname = "amit patel"

console.log(sname)
// console.log(sname[0])
// console.log(sname[1])
// console.log(sname[2])
// console.log(sname[3])


//length...

var l = sname.length
console.log("lenght  = ",l)

// for(let i=0;i<10;i++){
//     console.log(sname[i])
// }

// for(let i=0;i<l;i++){
//     console.log(sname[i])
// }

for(let i=0;i<sname.length;i++){
    console.log(sname[i])
}

var data  ="java"
console.log(data)

data[0]="J" //immutablity..

console.log(data)

//find no of space in string....
//find no of word in string...


var sname = "jay patel"
var spaceCount =0
for(let i=0;i<sname.length;i++){
    if(sname[i]==" "){
        spaceCount++
    }
}

console.log("space count..",spaceCount)
console.log("word count..",spaceCount+1)