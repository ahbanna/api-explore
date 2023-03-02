const loadMemes = () => {
  const URL = "https://meme-api.com/gimme/50";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMemes(data.memes))
    .catch((error) => console.log(error));
};

const showMemes = (memes) => {
  const allMemes = document.getElementById("all-memes");
  for (const meme of memes) {
    const memDiv = document.createElement("div");
    memDiv.innerHTML = `
      <div class="card" style="width: 18rem; margin: 20px;">
        <img src="${meme.url}" class="card-img-top" alt="..." style="height: 300px" , width="200px">
      </div>
    `;
    allMemes.appendChild(memDiv);
  }
};

loadMemes();
