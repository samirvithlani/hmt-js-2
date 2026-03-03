const calling=()=>{
    console.log("calling....")
}
const messaging=()=>{
    console.log("messaging..")
}

const demo =(a)=>{
    console.log(a)
    a() //calling()
}

// demo(10)
// demo("abc")
// demo(false)
// demo({})
// demo([])
//demo(calling) //calling add -->a
demo(messaging)