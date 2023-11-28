let count = 0;

document.getElementById("input-btn").addEventListener("click", () => {
  const inputValue = document.getElementById("input-value").value.trim();

  if (inputValue !== "") {
    count++;
    const parentElement = document.getElementById("content-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${count}</th> 
      <td>${inputValue}</td>
      <td>
        <button class="btn btn-danger deleteBtn">Delete</button>
        <button class="btn btn-primary doneBtn">Done</button>
      </td>
    `;
    parentElement.appendChild(tr);
    document.getElementById("input-value").value = "";

    const deleteBtn = tr.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
      tr.remove();
      updateRowNumbers();
    });

    const doneBtn = tr.querySelector(".doneBtn");
    doneBtn.addEventListener("click", function () {
      tr.classList.add("completed-task");
    });
  } else {
    alert("Please enter a task before adding.");
  }
});

function updateRowNumbers() {
  const rows = document.querySelectorAll("#content-container tr");
  count = 0;
  rows.forEach((row, index) => {
    const rowNumberElement = row.querySelector("th");
    if (rowNumberElement) {
      rowNumberElement.textContent = index + 1;
      count++;
    }
  });
}
document.getElementById("clear-btn").addEventListener("click", () => {
  const parentElement = document.getElementById("content-container");
  parentElement.innerHTML = "";
  count = 0;
});
