
var emails = ["samir@gmail.com","samir1@gmail.com","samir2@gmail.com","samir5@gmail.com"]
const checkEmail =()=>{
    //console.log("funciton called,")
    const text = document.getElementById("text")
    console.log(text.value)
    if(emails.includes(text.value)){
        alert("email is already taken")
    }
    else{
        alert("email is avaiiable,, ")
    }
}