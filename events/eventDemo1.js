const changeText =()=>{

    //alert("clicked..")
    const h1Demo = document.getElementById("text") //<h1></h1>
    console.log(h1Demo)
    console.log(h1Demo.innerText)
    h1Demo.innerText="hi"
    h1Demo.style.color="red"
}

const createBox =()=>{
    //<div id="box"></div>
    const boxdiv = document.getElementById("box")
    boxdiv.style.height="100px"
    boxdiv.style.width="100px"
    boxdiv.style.backgroundColor = "red"
}

const changeShape =() =>{
    const boxdiv = document.getElementById("box")
    boxdiv.style.borderRadius="50%"
}