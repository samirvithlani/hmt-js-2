const lang =["hindi","eng","marathi","tamil","gujrati","tamil","telugu","punabi"]
console.log(lang)
console.log(lang.length)

// for(let i=0;i<lang.length;i++){
//     console.log(lang[i])
// }

var index = -1;
for(let i=0;i<lang.length;i++){
    if(lang[i]=="marathi"){
        index = i //2
        break
    }
}
console.log(index)


var ind = lang.indexOf("tamil")
console.log("index ...",ind)

var lastIndex = lang.lastIndexOf("tamil")
console.log("ind",lastIndex)