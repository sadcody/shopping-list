

let container = document.querySelector("container");
let btn = document.querySelector(".container button");
let input = document.querySelector(".container input");

let underList = document.querySelector(".container ul");



let inputValue;
let inputField;    

function buttonClick (){
        inputField = document.getElementById("textInput");
        inputValue = inputField.value;
        inputField.value="";
        let list = document.createElement("li");
        list.classList.add(".container.list");
        list.textContent = inputValue;  
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add(".container.list");
        deleteBtn.textContent = "delete";
        deleteBtn.addEventListener("click", () => {
           list.remove();
        })

        
        
        underList.appendChild(list).appendChild(deleteBtn);
       

       }
      
       btn.addEventListener("click",buttonClick) ;
  
       










