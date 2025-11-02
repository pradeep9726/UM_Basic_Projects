const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function loadTasks() {
  taskList.innerHTML = localStorage.getItem('tasks') || '';
}

addBtn.addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;
  const li = document.createElement('li');
  li.innerHTML = `${taskInput.value} <span class="delete">❌</span>`;
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = '';
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  } else {
    e.target.classList.toggle('completed');
  }
  saveTasks();
});

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

loadTasks();
