const marks = [22,23,18,25,20,24]

//atleast some

var flag = marks.some((m)=>{
    return m>=25
})
var flag = marks.some((m)=>m>=25)
console.log("flag",flag)


var flag1 = marks.every((m)=>m>=20)
console.log(flag1)