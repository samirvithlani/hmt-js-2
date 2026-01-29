var no1 = 0
var no2 = 1
var sum=0
console.log(no1,no2)
//0 1 1 2 3
for(let i=1;i<=10;i++){
    sum = no1 + no2 //0 + 1 = 1
    //1 + 2 = sum =3
    //2 + 3 = sum= 5
    //3 + 5 = sum =8
    console.log(sum)
    no1 = no2 //no1 = 5
    no2 = sum //no2 = 8

}
