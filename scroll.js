var thebtn= document.getElementsByClassName("btnscrl")
/*var thebtn= document.getElementsByClassName("btnscrl")*/
console.log (thebtn)
var gallery = document.getElementsByClassName("gallery")
console.log (gallery)
var gal = 0
gallery[0].style.display = "block"
for (i=0;i<thebtn.length;i++){
    thebtn[i].addEventListener("click", scrolll)
}

function scrolll(e){
    for (j=0;j<gallery.length;j++) {
        gallery[j].style.display = "none"
    }
    if (gal===3) {
        gal = 0
    }
    else {
        gal +=1
    }
    return gallery[gal].style.display = "block"
}
