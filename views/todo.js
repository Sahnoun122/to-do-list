const btn1 = document.querySelector("#crud-modal");
let isclick =true;
let btn = function(){
    if(isclick == 1){
        btn1.style.display="block";
        isclick=0;
    }else{
        btn1.style.display="none";
        isclick=1;
    }
}

const crudModal = document.getElementById('crud-modal');
const titleInput = document.getElementById('title');
const statusInput = document.getElementById('statu');
const priorityInput = document.getElementById('Priority');
const descriptionInput = document.getElementById('description');
const submitButton = document.getElementById('submit');
const todoList = document.getElementById('todo1');
const doingList = document.getElementById('doing1');
const doneList = document.getElementById('done1');

let data = localStorage.stockage ? JSON.parse(localStorage.stockage) : [];

// Update task statistics
function statistic() {
    const todoCount = data.filter(task => task.statu === 'todo').length;
    const doingCount = data.filter(task => task.statu === 'doing').length;
    const doneCount = data.filter(task => task.statu === 'done').length;

    document.getElementById('todo-count').textContent = `todo: ${todoCount}`;
    document.getElementById('doing-count').textContent = `doing: ${doingCount}`;
    document.getElementById('done-count').textContent = `done: ${doneCount}`;
}

// Search tasks
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredTasks = data.filter(task => task.title.toLowerCase().includes(query));
    render(filteredTasks);
});

// Render tasks
function render(tasks = data) {
    todoList.innerHTML = '';
    doingList.innerHTML = '';
    doneList.innerHTML = '';

    tasks.forEach((task, index) => {
        const container = getContainer(task.statu);
        if (container) {
            container.innerHTML += `
                <div class="border-2 todoo1 ${createPriorityClass(task.Priority)} border-l-8" style="height: 130px; width: 330px; margin-top: 60px; margin-left: 150px;">
                    <h2 style="margin-left: 30px; font-family: 'Courier New', Courier, monospace; font-size: 600;">${task.title}</h2>
                    <p style="margin-left: 20px;">Statut: ${task.statu}</p>
                    <p style="margin-left: 20px;">Priorité: ${task.Priority}</p>
                    <p style="margin-left: 20px;">Description: ${task.description}</p>
                    <p  id="date-filter"   style="margin-left: 20px;">Date d'échéance: ${task.dueDate}</p>
                    <div class="flex" style="margin-top: 20px; margin-left: 140px;">
                        <button type="button" onclick="openUpdate(${index})" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Update</button>
                        <button type="button" onclick="deleteTask(${index})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</button>
                    </div>
                </div>
            `;
        }
    });

    statistic();
    render(filteredTasks); 
    filterByDate(selectedDate);
}

// Submit new task
submitButton.onclick = function() {
    const newTask = {
        title: titleInput.value,
        statu: statusInput.value,
        Priority: priorityInput.value,
        description: descriptionInput.value,
        dueDate: dueDate.value

    };
    
    data.push(newTask);
    localStorage.setItem('stockage', JSON.stringify(data));
    render();
    clearInputs();
    // updateStatistics();
};

// Get container based on status
function getContainer(status) {
    switch (status) {
        case 'todo':
            return todoList;
        case 'doing':
            return doingList;
        case 'done':
            return doneList;
        default:
            return null;
    }
}

// Create priority class for styling
function createPriorityClass(priority) {
    switch (priority) {
        case 'P1':
            return 'todoo';
        case 'P2':
            return 'todoo1';
        case 'P3':
            return 'todoo2';
        default:
            return '';
    }
}

// Clear input fields
function clearInputs() {
    titleInput.value = '';
    statusInput.value = '';
    priorityInput.value = '';
    descriptionInput.value = '';

}

// Delete a task
function deleteTask(index) {
    data.splice(index, 1);
    localStorage.setItem('stockage', JSON.stringify(data));
    render();
    statistic();
}

// Open update modal
function openUpdate(index) {
    const task = data[index];
    if (task) {
        titleInput.value = task.title;
        statusInput.value = task.statu;
        priorityInput.value = task.Priority;
        descriptionInput.value = task.description;
        crudModal.style.display = 'flex';
    }
    statistic();
}

// Save and close modal
function save() {
    crudModal.style.display = 'none';
}

// Initial render
render();

// Fonction de filtrage par date
function filterByDate(date) {
    const filteredTasks = data.filter(task => task.dueDate === date);
    render(filteredTasks); // Afficher les tâches filtrées
}

// Écouteur d'événements pour le champ de date
document.getElementById('date-filter').addEventListener('input', function() {
    const selectedDate = this.value; // Récupérer la date sélectionnée
    if (selectedDate) {
        filterByDate(selectedDate); // Appeler la fonction de filtrage par date
    } else {
        render(); // Si aucune date n'est sélectionnée, afficher toutes les tâches
    }
});

