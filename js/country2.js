const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCountry(data.slice(0, 4)))
    .catch((error) => console.log(error));
};

const showCountry = (countries) => {
  const allCountry = document.getElementById("all-country");
  // allCountry.innerHTML = ""; // if we want to remove previous data
  for (const country of countries) {
    // console.log(country.cca2);
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${country.flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${country.name.common}</h5>
        <h6 class="card-title">Capital: ${country.capital}</h6>
        <h6 class="card-title">population: ${country.population}</h6>
        <h6 class="card-title">Currency: ${country.currencies}</h6>
        <h6 class="card-title">Language: ${country.languages}</h6>
        <p class="card-text">Some quick example text</p>
  

      <button onclick="singleCountryDetails('${country.cca2}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Details
      </button>


      </div>
    </div>
    `;
    allCountry.appendChild(countryDiv);
  }
};
// single country details imcomplete
const singleCountryDetails = (id) => {
  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleCountryDetails(data));
};

const showSingleCountryDetails = (country) => {
  // console.log(country);
  document.getElementById("country-name").innerText = country[0].name.common;
  const singleCountryModalBody = document.getElementById(
    "single-country-modal-body"
  );
  singleCountryModalBody.innerHTML = `
  <p> Capital: ${country[0].capital[0]} </p>
  <p> Currency: ${country[0].currencies} </p>

  `;
};

// show all country
const seeAllCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCountry(data));
};

loadCountry();
