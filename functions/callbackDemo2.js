const upipayment = ()=>{
    console.log("pay via upi")
}
const credicardpayment = ()=>{
    console.log("pay via cc")
}
const cashpayment = ()=>{
    console.log("pay via cash")
}



var payment = (cb)=>{

    console.log("payment is processing")
    cb() //upipayment
}

var chocie = "cash"
if(chocie=="UPI"){

    payment(upipayment)
}
else if(chocie=="cash"){
    payment(cashpayment)
}
else if(chocie=="card"){
    payment(credicardpayment)
}
