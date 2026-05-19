const button = document.getElementById("btn") //<button>
console.log(button)
button.addEventListener("click",()=>{
    //alert("button clicked..")
    button.innerHTML="Clicked"
})
button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor="green"
    button.style.color="white"
    button.style.border="1 px solid green"
    button.style.borderRadius="10px"
})
button.addEventListener("mouseleave",()=>{

    button.style.backgroundColor="blue"
    button.style.color="white"
    button.style.border="1 px solid blue"
    button.style.borderRadius="10px"
})

const box = document.getElementsByClassName("box")//=>[array]
console.log(box)

box[0].addEventListener("click",()=>{
    alert("box clicked..")
})


for(let i=0;i<box.length;i++){
    box[i].addEventListener("mouseenter",()=>{
        alert("enter..")
    })
}