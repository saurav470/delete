const form = document.querySelector(".todo-main form");
const ulList = document.querySelector(".item-added");
const input = document.querySelector(".todo-main form input[type='text']");





form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li")
    const newtodotext=input.value;
    li.innerHTML=`
    <h1 class="text">${newtodotext}</h1>
    <button class="li-btn remove">remove</button>`
    ulList.append(li)
    input.value=""
    
})


ulList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        e.target.parentElement.remove();
    }
})

ulList.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains("remove")){
        parent=e.target.parentElement
        parent.childNodes[1].style.textDecoration="line-through";
       
    }
    
})

ulList.addEventListener("mouseout",(e)=>{
    if(e.target.classList.contains("remove")){
        parent=e.target.parentElement
        parent.childNodes[1].style.textDecoration="none";
       
    }
})


