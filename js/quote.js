const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => showQuote(data))
    .catch((error) => console.log(error));
};

// // With Async Await
// const loadQuote = async () => {
//   try {
//     const res = await fetch("https://api.kanye.rest/");
//     const data = await res.json();
//     showQuote(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const showQuote = (quotes) => {
  const allQuotes = document.getElementById("all-quotes");
  allQuotes.innerText = quotes.quote;
};
loadQuote();
