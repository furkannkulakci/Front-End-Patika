export function createMenuCard(recipe) {
  const sectionCenter = document.querySelector(".section-center");
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add(
    "menu-items",
    "col-lg-6",
    "col-sm-12",
    recipe.category
  );

  const img = document.createElement("img");
  img.classList.add("photo");
  img.src = recipe.img;
  img.alt = recipe.title;
  recipeDiv.appendChild(img);

  const recipeInfo = document.createElement("div");
  recipeInfo.classList.add("menu-info");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  const title = document.createElement("h4");
  title.textContent = recipe.title;
  menuTitle.appendChild(title);

  const price = document.createElement("h4");
  price.classList.add("price");
  price.textContent = recipe.price;
  menuTitle.appendChild(price);
  recipeInfo.appendChild(menuTitle);

  const menuInfo = document.createElement("div");
  menuInfo.classList.add("menu-info");
  const text = document.createElement("p");
  text.classList.add("desc");
  text.textContent = recipe.desc;
  menuInfo.appendChild(text);

  recipeInfo.appendChild(menuInfo);

  recipeDiv.appendChild(recipeInfo);
  sectionCenter.appendChild(recipeDiv);
}
