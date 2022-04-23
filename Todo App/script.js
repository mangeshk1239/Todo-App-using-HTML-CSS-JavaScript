const inputBox = document.querySelector(".inputBox");
const addBtn = document.querySelector(".addBtn");
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("Please enter a Todo");
    } else {
        Todos();
    }        
});

const Todos = () => {
    const todo = document.createElement('div');
    todo.setAttribute("class", "todoDiv");
    todo.innerHTML = `
    <div class="todo-container">
        ${inputBox.value}
    </div>
    <div class="btnDiv">
        <button class="checkBtn"><i class="fa-solid fa-check"></i></button>
        <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
    </div>
    `
    const todoContainer = todo.querySelector(".todo-container");
    const checkBtn = todo.querySelector(".fa-check");
    const deleteBtn = todo.querySelector(".fa-trash");


    checkBtn.addEventListener("click", () => {
        todoContainer.style.textDecorationLine = "line-through";
    });

    deleteBtn.addEventListener("click", () => {
        todo.style.display = "none";
    })

    inputBox.value = "";
    
    container.append(todo);
};