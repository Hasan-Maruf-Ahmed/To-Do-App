const inputBox = document.getElementById('input_box');
const taskList = document.getElementById('taskList');

function addTask(){
    if(inputBox.value === '')
    {
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
    }
    inputBox.value = '';
}