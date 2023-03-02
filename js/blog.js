const loadCategories = () => {
  const url = " https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCategories(data.data));
};

const showCategories = (categories) => {
  // console.log(categories);
  const allCategories = document.getElementById("all-categories");
  for (const category of categories.news_category) {
    console.log(category);
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

  const allNews = document.getElementById("all-news");
  // clear previous blog for 2nd time clicking
  allNews.innerHTML = "";
  //
  for (const singleNews of data) {
    console.log(singleNews);
    const div = document.createElement("div");
    div.classList.add("card", "mb-3");
    div.innerHTML = `
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${
                singleNews.image_url
              }" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${singleNews.title}</h5>
                <p class="card-text">${singleNews.details.slice(0, 320)}...</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center ">
                <div class="author d-flex align-items-center gap-3">
                  <div>
                          <img src="${
                            singleNews.author.img
                          }" alt="" style="height: 40px; width: 40px; border-radius: 50px;">
                  </div>
                  <div>
                      <h6>${singleNews.author.name}</h6>
                      <p class="m-1">${singleNews.author.published_date}</p>
                  </div>
                </div>
                <div class="viewer">
                  <h5>${singleNews.total_view}</h5>
                </div>
                <div class="rating">
                    <p>${singleNews.rating.number}</p>
                </div>
              </div>
            </div>
          </div>
    `;
    allNews.appendChild(div);
  }
};

// call the function
loadCategories();
