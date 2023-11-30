// 'ul' tag selection
const myList = document.querySelector("#list");

// click list
myList.addEventListener("click", (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// create new element
function newElement() {
  const inputValue = document.getElementById("task").value;

  // error message
  if (!inputValue || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    $(".error").toast("show");
    // clear input field
    document.getElementById("task").value = "";
    return;
  }

  // create and add a li element to the list
  const li = document.createElement("li");
  li.textContent = inputValue;
  myList.appendChild(li);

  // create span, add cross and add to spani li element
  const span = document.createElement("SPAN");
  span.className = "close";
  span.textContent = "\u00D7";
  li.appendChild(span);

  // delete li element when spane is clicked
  span.onclick = () => {
    li.style.display = "none";
  };

  // clear input field
  document.getElementById("task").value = "";
}
