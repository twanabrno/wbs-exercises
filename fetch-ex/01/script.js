async function fetchTodos() {
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => response.json())
  //   .then((todos) => {
  //     populateTodos(todos);
  //   })
  //   .catch((error) => console.error("Error fetching todos:", error));
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    populateTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function populateTodos(todos) {
  const todoList = document.getElementById("todo-list");
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;

    if (todo.completed) {
      todoItem.classList.add("line-through", "text-gray-500");
    } else {
      todoItem.classList.add("text-gray-800");
    }

    todoList.appendChild(todoItem);
  });
}

window.addEventListener("DOMContentLoaded", fetchTodos);
