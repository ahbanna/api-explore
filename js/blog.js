const loadCategories = () => {
  const url = " https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCategories(data.data));
};

const showCategories = (categories) => {
  console.log(categories);
  const allCategories = document.getElementById("all-categories");
  for (const category of categories.news_category) {
    console.log(category.category_name);
    // allCategories.innerHTML += `<a class="nav-link" href="#">${category.category_name}</a>`;
    const allLinks = document.createElement("p");
    allLinks.innerHTML = `
    <a class="nav-link" href="#" onclick="categoryId('${category.category_id}', '${category.category_name}')">${category.category_name}</a>
    `;
    allCategories.appendChild(allLinks);
  }
};
// show news count and category name below main menu
const categoryId = (catId, catName) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${catId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => idName(data.data, catName));
};

const idName = (data, catName) => {
  document.getElementById("count-news").innerText = data.length;
  document.getElementById("cat-name").innerText = catName;
};

loadCategories();
