const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCountries(data));
};
const showCountries = (countries) => {
  const allCountries = document.getElementById("all-countries");
  for (const country of countries) {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("single-country");
    countryDiv.innerHTML = `
    <h4> Country Name: ${country.name.common}  </h4>
    <p> Capital: ${country.capital ? country.capital[0] : "No capital"} </p>
    <button onclick ="countryDetails()"> Details </button>
    `;
    allCountries.appendChild(countryDiv);
  }
};

const countryDetails = () => {
  console.log("Details");
};
loadCountries();
