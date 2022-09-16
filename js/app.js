"use strict";

let barIcon=document.getElementById("barIco")
let close=document.querySelector("#header .right-side .responsive-menu #close")
let responsiveMenu=document.querySelector("#header .responsive-menu")


barIcon.onclick=function(){
    responsiveMenu.classList.toggle("active-menu")
}

close.onclick=function(){
    responsiveMenu.classList.remove("active-menu")
}
/////

 let icon=document.getElementById("angle-down");
 let dropMenu=document.getElementById(".Dropdown");
 icon.onclick=function(){
    dropMenu.classList.add("active-ul")
 }



