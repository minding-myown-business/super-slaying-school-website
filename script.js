const gotoWordle = () => {
  window.location.href = "https://www.nytimes.com/games/wordle/index.html";
};
const gotoGames = () => {
  window.location.href = "https://www.coolmathgames.com/";
};
const gotoSchool = () => {
  window.location.href = "https://login.arbor.sc/";
};
const cheatOnMyHomework = () => {
  window.location.href = "https://chatgpt.com/";
};
const gotoDoxxing = () => {
  window.location.href = "https://grabify.link/";
};
const backToMain = () => {
  window.location.pathname = "index.html";
};
const gotoYearbook = () => {
  window.location.pathname = "YearlyYearbook.html";
};

/**
 * Adds a quote to the local storage with the current year as the key. If a quote already exists for the current year,
 * it adds the new quote to the existing quote object.
 *
 * @return {void} This function does not return a value.
 */
const addQuote = () => {
  const quote = document.getElementById("quote").value;
  const author = document.getElementById("author").value;
  const year = new Date().getFullYear();
  const newQuote = `\"${quote}\" - ${author} ${year}`; // "Mmm potatoes" - Bob 2024
  const existingQuotes = localStorage.getItem(year);
  if (existingQuotes === null) {
    const newQuoteObject = {};
    const id = Object.keys(newQuoteObject).length + 1;
    newQuoteObject[id] = newQuote;
    localStorage.setItem(year, JSON.stringify(newQuoteObject));
  } else {
    const existingQuoteObject = JSON.parse(existingQuotes);
    const id = Object.keys(existingQuoteObject).length + 1;
    existingQuoteObject[id] = newQuote;
    localStorage.setItem(year, JSON.stringify(existingQuoteObject));
  }
};

/**
 * Displays existing quotes in the "existingQuotesContainer" element.
 *
 * @return {void} This function does not return a value.
 */
const displayExistingQuotes = () => {
  const existingQuotesContainer = document.getElementById(
    "existingQuotesContainer"
  );
  const years = Object.keys(localStorage).sort().reverse();

  years.forEach((year) => {
    const existingQuotes = JSON.parse(localStorage.getItem(year));
    const quotesList = document.createElement("ul");

    Object.values(existingQuotes).forEach((quote) => {
      const quoteItem = document.createElement("li");
      quoteItem.textContent = quote;
      quotesList.appendChild(quoteItem);
    });

    const yearHeader = document.createElement("h3");
    yearHeader.textContent = `Quotes for ${year}`;

    existingQuotesContainer.appendChild(yearHeader);
    existingQuotesContainer.appendChild(quotesList);
  });
};
