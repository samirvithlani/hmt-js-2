//assci value
//A - 65,B-66...
//a - 97...
//space 32

var data= "AMIT"

///[0]-A -65
console.log(data.charCodeAt(0))

var x = 97; //-->A
console.log(String.fromCharCode(x))


//A -65
//a - 97
//97 -65 = 32

//a -97 -->A 97-32 -65

var user = "amIt"
var upperUser = ""

//AMIT

for(let i=0;i<user.length;i++){

    
    var ch = user.charCodeAt(i) //97 //108 
    if(ch>=97 && ch<=121){
        ch = ch-32 //65
    }
    //console.log(ch)
    //console.log(String.fromCharCode(ch))
    upperUser = upperUser + String.fromCharCode(ch) //65

}
console.log(upperUser)




