var submitbtn = document.getElementById ("submit")

submitbtn.addEventListener("click",check)
var thealerts= document.getElementsByClassName("alarm")
var thetext = document.querySelector ("textarea")



function check(e){
var inputs = document.querySelectorAll ("input")
var toreturn = true
for (var j=0;j<thealerts.length;j++){
    thealerts[j].style.display= "none"
}
if (inputs[2].value!=="" && (Number(inputs[2].value)<14 || Number(inputs[2].value)>20 )) {
    var toreturn = false
    console.log ("work")
    if (Number(inputs[2].value)<14){
        var age = "young"
    }
    else if (Number(inputs[2].value)>20) {
        var age = "old"
    }
    alert ("Sorry you are too " + age+ " to join us")
}
 if (inputs[3].value!=="" && inputs[3].value.indexOf("@")===-1 && inputs[3].value.indexOf(".")===-1) {
    console.log (inputs[3].value)
     alert ("enter a valid email address")
//     var toreturn = false
 }

if (inputs[4].value!=="" && (inputs[4].value).toLowerCase()!=="sfax") {
    console.log (inputs[4].value)
    alert ("Sorry we're based in Sfax only")
    var toreturn = false
}
if (thetext.value!=="" && ((thetext.value).length < 50 || (thetext.value).length > 300 )) {
    if ((thetext.innerHTML).length < 50){
        alert ("field 6 answer is too short enter between 150 and 500 characters")
    }
    else if ((thetext.innerHTML).length > 300){
        alert ("field 6 answer is too short enter between 150 and 500 characters")
    }
    var toreturn = false
}
for (var i=0;i<inputs.length;i++){

    console.log (inputs[i].value)
    console.log (typeof(inputs[i].value))
    if (inputs[i].value===""){
        
        console.log("Please fill this field with the required information");
        alert("Please fill field "+ (i+1) +  " with the required information");
        thealerts[i].style.display= "block"
        console.log(thealerts[i])
        var toreturn = false
    }
}
if (thetext.value===""){
        console.log (thetext.value)
    console.log("Please fill this field with the required information");
    alert("Please fill field "+ 6 +  " with the required information");
    thealerts[5].style.display= "block"
    console.log(thealerts[5])
    var toreturn = false
}

if (toreturn === true) {
    alert ("Thank you, your application has been successfully sent. It will be reviewed as soon as possible")
}



}

