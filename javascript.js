const form =  document.getElementById("todo-task-form")
const input = document.getElementById("add-task-input")
const task = document.getElementById("task")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    inputValue = input.value;
    if(inputValue.trim().length !== 0){
        const content = document.createElement("div")
        content.setAttribute("id","content")
    
        const taskInput = document.createElement("input")
        taskInput.type= "text"
        taskInput.value = inputValue
        taskInput.setAttribute("readonly","readonly")
        taskInput.setAttribute("id","textInput")
    
        const editButton = document.createElement("button")
        editButton.classList.add("edit")
        editButton.innerHTML = "edit"
    
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete")
        deleteButton.innerText = "Delete"
    
        task.appendChild(content)
        content.appendChild(taskInput)
        content.appendChild(editButton)
        content.appendChild(deleteButton)
        input.value = "";
    
        editButton.addEventListener("click",()=>{
            if(editButton.innerHTML.toLocaleLowerCase() == "edit"){
                taskInput.removeAttribute("readonly")
                taskInput.focus();
                editButton.innerHTML = "save";
            }else{
                taskInput.setAttribute("readonly","readonly");
                editButton.innerHTML = "edit";
            }
            if(taskInput.value ==""){
                content.remove()
            }
            
        })
    
        deleteButton.addEventListener("click",()=>{
            content.remove()
        })
    }else{
        alert("please write something")
    }
})