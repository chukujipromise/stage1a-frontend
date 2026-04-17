document.addEventListener("DOMContentLoaded", function () {

  const editBtn = document.querySelector(".edit-btn");
  const deleteBtn = document.querySelector(".delete-btn");
  const checkbox = document.getElementById("completeTask");

  const todoCard = document.querySelector(".todo-card");
  const editForm = document.getElementById("editForm");

  const title = document.querySelector(".todo-title");
  const description = document.querySelector(".description");
  const priorityDisplay = document.getElementById("priorityDisplay");
  const dateDisplay = document.getElementById("dateDisplay");
  const statusBadge = document.getElementById("statusBadge");

  const editTitle = document.getElementById("editTitle");
  const editDescription = document.getElementById("editDescription");
  const editPriority = document.getElementById("editPriority");
  const editDate = document.getElementById("editDate");

  const saveBtn = document.getElementById("saveBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  // Open edit form
  editBtn.addEventListener("click", function () {
    editTitle.value = title.textContent;
    editDescription.value = description.textContent;
    editPriority.value = priorityDisplay.textContent;
    
    todoCard.classList.add("hidden");
    editForm.classList.remove("hidden");
  });

  // Save changes
  saveBtn.addEventListener("click", function () {
    title.textContent = editTitle.value;
    description.textContent = editDescription.value;
    priorityDisplay.textContent = editPriority.value;
    dateDisplay.textContent = "Due: " + editDate.value;

    editForm.classList.add("hidden");
    todoCard.classList.remove("hidden");
  });

  // Cancel edit
  cancelBtn.addEventListener("click", function () {
    editForm.classList.add("hidden");
    todoCard.classList.remove("hidden");
  });

  // Delete task
  deleteBtn.addEventListener("click", function () {
    todoCard.remove();
  });

  // Mark complete
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      title.style.textDecoration = "line-through";
      statusBadge.textContent = "Done";
      statusBadge.style.background = "#c8f7c5";
      statusBadge.style.color = "green";
    } else {
      title.style.textDecoration = "none";
      statusBadge.textContent = "Pending";
      statusBadge.style.background = "#f7dede";
      statusBadge.style.color = "darkred";
    }
  });

});