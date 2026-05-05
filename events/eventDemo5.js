const getData =() =>{
    const nameInput = document.getElementById("nameInput") //<p>
    const text = document.getElementById("text")
    console.log(text.value)
    //nameInput.innerText = text.value
    if(text.value.length<3){
        nameInput.innerText="min 3 char is required*"
        nameInput.style.color ="red"
    }
    else{
        nameInput.innerText = text.value
        nameInput.removeAttribute("style")
    }
}