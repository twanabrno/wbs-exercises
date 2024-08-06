function createListItem(task) {
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.id = task.id;
  li.className = "flex justify-between items-center p-2 border-b";

  li.innerHTML = `
    <span>${task.content}</span>
    <button class="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded deleteBtn">
      Delete
    </button>
  `;

  li.querySelector(".deleteBtn").addEventListener("click", function () {
    deleteTask(task.id);
  });

  taskList.prepend(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById(taskId).remove();
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => createListItem(task));
}

document
  .getElementById("taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput");
    const content = userInput.value.trim();

    if (content !== "") {
      const taskId = "task-" + crypto.randomUUID().replace(/-/g, "");
      const newTask = { id: taskId, content: content };
      saveTask(newTask);
      createListItem(newTask);
      userInput.value = "";
    }
  });

document.getElementById("reload").addEventListener("click", function () {
  window.location.reload();
});

window.addEventListener("load", loadTasks);
