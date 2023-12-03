const inputBox = document.getElementById("inputbox")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("Please add the task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        saveData();
    }
    if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

function allClearTask(){
    if(listContainer.innerHTML === ''){
        alert("Empty List")
    }
    else{
        if(confirm("are you sure you want to delete")){
            listContainer.innerHTML = ''; // This clears all the contents inside listContainer
            localStorage.removeItem("data"); 
        }
    }
    
   
}

showData();



