let addIngredientsBtn = document.getElementById("addIngredientsBtn");
let ingredientList = document.querySelector(".ingredientList");
let ingredeintDiv = document.querySelectorAll(".ingredientDiv")[0];

addIngredientsBtn.addEventListener("click", function () {
  let newIngredients = ingredeintDiv.cloneNode(true);
  let test2 = document.querySelectorAll("input").length;
  newIngredients
    .getElementsByTagName("input")[0]
    .setAttribute("name", "image" + test2);

  let input = newIngredients.getElementsByTagName("input")[0];
  // console.log(input.id);

  // let test = newIngredients.querySelectorAll("input");
  // document.getElementsByTagName("input")[length].name = "image" + test2;
  console.log(newIngredients.name);
  input.value = "";
  ingredientList.appendChild(newIngredients);
});
