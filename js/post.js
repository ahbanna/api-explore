const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showPost(data))
    .catch((error) => console.log(error));
};
function showPost(posts) {
  // get id
  const allPosts = document.getElementById("all-posts");
  for (const post of posts) {
    // create div
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
    <h3> Title: ${post.title} </h3>
    <p> Post: ${post.body} </p>
    `;
    // append child
    allPosts.appendChild(postDiv);
  }
}

loadData();
