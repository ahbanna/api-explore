const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals));
};

const showMeals = (meals) => {
  const allMeals = document.getElementById("all-meals");
  allMeals.innerText = "";
  for (const meal of meals) {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
      <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions}</p>
          <button onclick='loadMealDeatils(${meal.idMeal})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details"> Details </button>
        </div>
    </div>
  `;
    allMeals.appendChild(mealDiv);
  }
};

//Search
const btnSearch = () => {
  const inputText = document.getElementById("input-text").value;
  loadMeals(inputText);
};

// Meal details in modal
const loadMealDeatils = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMealDetails(data.meals[0]));
};
const showMealDetails = (meal) => {
  document.getElementById("meal-details-title").innerText = meal.strMeal;
  const mealDetailsBody = document.getElementById("meal-details-body");
  mealDetailsBody.innerHTML = `
    <p> Category: ${meal.strCategory} </p>
    <p> Origin: ${meal.strArea} </p>
    `;
};

// call the function
loadMeals("fish");
