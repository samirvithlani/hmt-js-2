var data = "naman"
var reverse = ""

for(let i=data.length-1;i>=0;i--){
    //console.log(data[i])
    reverse = reverse + data[i] //"" = ""+l ="l"
                                //"l" = "l"+"a" ="la"
                                //"la" ="la"+y ="lay"
}
console.log(reverse)

//palindrome..
if(reverse == data){
    console.log("palindrome name..")
}
else{
    console.log("not palindrome..")
}

var sent = "hi this is india, and india is in asia"
//var sp =2,var ep =6
//2 3 4 5 6 --> this -->new string..

//sp =1 ep =9

var subsent = ""