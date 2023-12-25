const showAll = document.querySelector(".showAll");
showAll.addEventListener("click", function () {
  const menuItems = document.querySelectorAll(".menu-items");
  menuItems.forEach((item) => (item.style.display = "flex"));
});

const hideAllExcept = document.querySelectorAll(".hideAllExcept");
hideAllExcept.forEach((button) => {
  button.addEventListener("click", function (e) {
    const menuItems = document.querySelectorAll(".menu-items");
    menuItems.forEach((item) => {
      if (item.classList.contains(e.target.outerText)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
    // e.preventDefault();
  });
});
