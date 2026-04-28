var clickCount =0;
const morfLink =()=>{

    const link = document.getElementById("google")
    if(clickCount==0){
        link.href = "https://www.google.com"
        link.target ="_blank"
        clickCount++

    }
    else{
        link.href="https://www.netflix.com"
        link.target ="_blank"
        clickCount++
    }
}