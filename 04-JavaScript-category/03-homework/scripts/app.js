import { menu } from "./menuList.js";
import { createMenuCard } from "./createMenuCard.js";

menu.forEach((recipe) => createMenuCard(recipe));
