const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task");
        return;
      }

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = taskText;

      const actions = document.createElement("div");
      actions.className = "actions";

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Done";
      completeBtn.className = "complete";
      completeBtn.onclick = () => {
        li.classList.toggle("completed");
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => {
        li.remove();
      };

      actions.appendChild(completeBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      taskList.appendChild(li);
      taskInput.value = "";
    }