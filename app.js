const toDoInput = document.querySelector("#to-do-input");
// console.log(toDoInput);
const addBtn = document.getElementById("add-button");
// console.log(addBtn);

const toDoList = document.getElementById("to-do-list");
// console.log(toDoList);

const checkInput = document.createElement("input");
toDoList.appendChild(checkInput);
checkInput.type = "checkbox"
// console.log(checkInput);
checkInput.id = "check"

const label = document.createElement("label");
label.setAttribute("for","check");
toDoList.appendChild(label)


addBtn.addEventListener("click", () => {
    if(!toDoInput.value) {
        alert("Please enter something on the to do list!")
    } else {
        label.innerHTML += `${toDoInput.value}`;
        console.log(label.innerHTML);
        label.innerHTML = "";
    }
})