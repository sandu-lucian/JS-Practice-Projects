let quoteBtn = document.getElementById("quote-btn");
let removeQuoteBtn = document.getElementById("remove-btn");
let loadingParagraph = document.getElementById("loading-p");
let quoteList = document.getElementById("quote-list");

function getQuote(url) {
  loadingParagraph.classList.remove("hidden");
  return fetch(url)
    .then((response) => response.json())
    .finally(function () {
      loadingParagraph.classList.add("hidden");
    });
}

function displayQuote(quote) {
  let li = document.createElement("li");
  li.innerText = quote;
  quoteList.appendChild(li);
}

function removeQuote() {
  quoteList.innerHTML = "";
}

quoteBtn.addEventListener("click", function () {
  getQuote("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(
    (result) => {
      displayQuote(result);
    }
  );
});

removeQuoteBtn.addEventListener("click", removeQuote);
