// load data 1
function loadData1() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// laod data 2
function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => show(data));
}
function show(users) {
  // console.log(users);    // show all users
  //---------------------------------------//
  for (const user of users) {
    console.log(user.email);
  } // show all users email
}

// laod data 3
function loadData3() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => show(data));

  function show(users) {
    const ul = document.getElementById("user-list"); // get ul
    for (const user of users) {
      const li = document.createElement("li"); // create li
      li.innerText = user.name; // set data's name
      // li.innerHTML = `
      // <li> Name: ${user.name} </li>
      // `;
      ul.appendChild(li); // append li to ul
    }
  }
}

// load post
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => showPost(data));
function showPost(posts) {
  const userPost = document.getElementById("user-posts");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
    <h4> Name: ${post.id} </h4>
    <h3> Tile: ${post.title} </h3>
    <p> Post: ${post.body} </p>
    `;
    userPost.appendChild(postDiv);
  }
}
