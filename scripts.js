document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return; // Don't add empty tasks
        }

        // Create new task element
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Append new task to the list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';

        // Add event listener for delete button
        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    });

    // Optional: Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
