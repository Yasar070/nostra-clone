var sideNavcol=document.getElementById("sideNavcol")
var colside1=document.getElementById("colside1")
var navIcon1x=document.getElementById("navIcon1x")
var checkInp=document.querySelector(".checkInp")
var colImg=document.querySelector(".colImg")
var col1=document.querySelector(".col1")
var checkInp2=document.querySelector(".checkInp2")
var checkInp4=document.querySelector(".checkInp4")
var checkInp=document.querySelector(".checkInp")
 var checkInp3=document.querySelector(".checkInp3")
var dressCollections2=document.querySelector(".dressCollections2")
var dressCollections3=document.querySelector(".dressCollections3")
var dressCollections=document.querySelector(".dressCollections")
 colside1.addEventListener("click",function(){
    sideNavcol.style.right="0";

});
navIcon1x.addEventListener("click",function(){
    sideNavcol.style.right="-50%"
});
checkInp2.addEventListener("click",function(){
if(checkInp2.checked)
{
    dressCollections2.style.display="none"

}
else{
    dressCollections2.style.display="flex"
}

    })

    checkInp3.addEventListener("click",function(){
        if(checkInp3.checked)
        {
            dressCollections.style.display="none"
            
        }
        else{
            dressCollections.style.display="flex"
        }
        
            })
            checkInp4.addEventListener("click",function(){
                if(checkInp4.checked)
                {
                    dressCollections.style.display="none"
                    
                }
                else{
                    dressCollections.style.display="flex"
                }
                
                    })

            checkInp.addEventListener("click",function(){
                if(checkInp.checked)
                {
                    dressCollections3.style.display="none"
                    
                }
                else{
                    dressCollections3.style.display="flex"
                }
                
                    })
 

