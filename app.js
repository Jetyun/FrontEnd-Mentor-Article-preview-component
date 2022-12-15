const secondary= document.querySelector("#secondary")
const tertiary= document.querySelector("#tertiary")
const secondBtn= document.querySelector("#secondary_button")
const tertiarBtn= document.querySelector("#tertiary_button")
const buttonPic= document.querySelector("#secondary_button_pic")

secondBtn.addEventListener("click", ()=>{
    if(tertiary.style.display="none"){
        tertiary.style.display="block";
        tertiarBtn.style.display="block"
}
}) 
tertiarBtn.addEventListener("click", ()=>{
    if(tertiary.style.display="block"){tertiary.style.display="none";
    tertiarBtn.style.display="none"}
})