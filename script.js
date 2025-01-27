document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = function() {
        const taskText = taskInput.value.trim(); // Trim the input value

        if (taskText === "") {
            alert("Please enter a task!"); // Alert if the input is empty
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Attach event listener to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append button and list item
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    };

    // Add event listener to the button
    addButton.addEventListener('click', addTask);

    // Add event listener for the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});