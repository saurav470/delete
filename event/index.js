const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
const main=document.querySelector("main")


grandparent.addEventListener("click",(e)=>{
   
    console.log("grandparent")
})


parent.addEventListener("click",(e)=>{
   
    console.log("parent")
},true)

child.addEventListener("click",(e)=>{
   
    console.log("child")
},true)
main.addEventListener("click",(e)=>{
   
    console.log("clicked")
})


document.body.addEventListener("click",(e)=>{
   
    console.log("body")
})
