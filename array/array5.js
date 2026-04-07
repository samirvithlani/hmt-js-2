const marks = [22,23,18,25,20,24]
var flag= false;

//loop
//atleast one subject has 25 marks print true or false

for(let i=0;i<marks.length;i++){
    //22,23,24,25
    if(marks[i]>=25){
        flag = true
        break
    }
}
console.log(flag)

//check every subhect marks >=20