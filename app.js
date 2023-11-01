let todoContainer = document.querySelector(".todo-container"),
  form = document.querySelector("form"),
  todoInput = document.querySelector(".todo-input"),
  todoButton = document.querySelector(".todo-btn");

let ul = document.createElement("ul");
ul.classList.add("todo-list");
todoContainer.appendChild(ul);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value != "") {
    todoInput.classList.remove("error");
    createTodo();
    completedTodo();
    deleteTodo();
  } else {
    todoInput.classList.add("error");
  }
});

function createTodo() {
  let li = document.createElement("li"),
    span = document.createElement("span"),
    checkbox = document.createElement("input");
  img = document.createElement("img");
  img.src = "./assets/img/trash-solid.svg";

  checkbox.type = "checkbox";
  checkbox.checked = false;
  span.textContent = todoInput.value;
  todoInput.value = "";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(img);

  ul.appendChild(li);
}

function completedTodo() {
  let allTodoChekbox = ul.querySelectorAll('li > input[type="checkbox"]');
  allTodoChekbox.forEach((item) => {
    item.addEventListener("click", function (e) {
      if(item.checked) {
        let span = item.nextElementSibling;
        span.classList.add('completed');
      }
      else if(!item.checked){
        let span = item.nextElementSibling;
        span.classList.remove('completed');
      }
    });
  });
}

function deleteTodo() {
  let allTodoIcons = ul.querySelectorAll("li>img");
  allTodoIcons.forEach((item) => {
    item.addEventListener("click", function (e) {
      item.parentElement.remove();
    });
  });
}
