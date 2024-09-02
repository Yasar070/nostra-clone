var sideNavcol=document.getElementById("sideNavcol")
var contactsideNav=document.getElementById("contactsideNav")
var Barcontactpg=document.getElementById("Barcontactpg")
var xparaofcon=document.getElementById("xparaofcon")



Barcontactpg.addEventListener("click",function(){
    contactsideNav.style.right="0";
   }) ;
 xparaofcon.addEventListener("click",function(){
     contactsideNav.style.right="-50%";
 });
