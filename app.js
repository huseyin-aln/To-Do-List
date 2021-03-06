const toDoInput = document.querySelector("#to-do-input");

const addBtn = document.getElementById("add-button");

const toDoList = document.getElementById("to-do-list");


addBtn.onclick = function () {

    if(!toDoInput.value) {
        alert("Please enter something on the to do list!")

    } else {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        toDoList.appendChild(taskDiv);

        const checkInput = document.createElement("input");
        checkInput.type = "checkbox"
        checkInput.id = "check"
        taskDiv.appendChild(checkInput);

        const label = document.createElement("label");
        label.setAttribute("for","check");
        taskDiv.appendChild(label);

        label.innerHTML += `${toDoInput.value}`;

        const taskBtn = document.createElement("button");
        taskBtn.id = "task-button";
        taskDiv.appendChild(taskBtn);
        taskBtn.innerText = "X";

        toDoInput.value = "";

        taskBtn.addEventListener("click", () => {
            taskDiv.remove()
        })

        checkInput.addEventListener("click", () => {
            label.style.textDecoration = "line-through"
        })
    }
}

toDoInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        addBtn.onclick();
    }
})




