const userLoad = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((ren) => ren.json())
    .then((data) => showUser(data));
};

const showUser = (users) => {
  // Gender
  const userGender = document.getElementById("user-gender");
  userGender.innerText = users.results[0].gender;
  // Name
  const userName = document.getElementById("user-name");
  userName.innerText =
    users.results[0].name.title +
    ". " +
    users.results[0].name.first +
    " " +
    users.results[0].name.last;

  // Country
  const userCountry = document.getElementById("user-country");
  userCountry.innerText = users.results[0].location.country;

  // Email
  const userEmail = document.getElementById("user-email");
  userEmail.innerText = users.results[0].email;

  // Image
  const userImage = document.getElementById("user-image");
  // const picture = users.results[0].picture.large;
  // const img = document.createElement("img");
  // img.src = picture;
  // userImage.appendChild(img);

  userImage.innerHTML = `
  <img src="${users.results[0].picture.large}" alt="">
  `;
};

userLoad();
