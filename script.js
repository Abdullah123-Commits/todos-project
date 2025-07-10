// working fine

// outputList = document.getElementById('task-list');
// console.log(outputList);
document.addEventListener('DOMContentLoaded', function () {
    //code
    const form = document.querySelector('.data-input-form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();// to prevent page refresh

        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);

            const doneBtn = document.createElement('button');//creating done btn
            doneBtn.textContent = 'Done';
            doneBtn.style.marginLeft = '20px';
            doneBtn.style.backgroundColor = '#c8e6c9';// green

            const removeBtn = document.createElement('button');//creating remove btn
            removeBtn.textContent = 'Remove';
            removeBtn.style.marginLeft = '20px';
            removeBtn.style.backgroundColor = '#ffcdd2';// red

            //ADDING DONE AND REMOVE BUTTON TO LIST ITEM
            li.appendChild(doneBtn);
            li.appendChild(removeBtn);
            

            taskInput.value = "";//clear the input for next task entry

            doneBtn.addEventListener('click', () => {
                li.style.textDecoration = "line-through";
                });

            removeBtn.addEventListener('click', () => {
                li.remove();
                });
        }
        else {
            alert("please enter a task.");
        }

    });

    //SEARCH BUTTON FUNCTONALITY
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const tasks = taskList.getElementsByTagName('li');

        for (let task of tasks) {
            const taskText = task.firstChild.textContent.toLowerCase();
            if (taskText.includes(searchTerm)) {
                task.style.display = 'list-item';
            } else {
                task.style.display = 'none';
            }
        }
    });

    // CLEAR BUTTON FUNCTIONALITY
    const clearBtn = document.getElementById('clearAllBtn');
    clearBtn.addEventListener('click', function () {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ""; // Clears all <li> elements
});


});


