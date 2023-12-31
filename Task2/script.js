// this is the case when the button click calls each time a new fetch request 

document.addEventListener("DOMContentLoaded", function () {
    var fetchButton = document.getElementById("documents_button");
    var quotesParent = document.getElementById("documents_container");

    fetchButton.addEventListener("click", function () {
      const randomFetchPromises = Array.from({ length: 3 }, async () => {
        try {
          const response = await fetch('https://api.quotable.io/random');
          return await response.json();
        } catch (error) {
          return console.error('Error fetching quotes:', error);
        }
      });
    
        Promise.all(randomFetchPromises)
          .then((quotes) => {
            quotes.forEach((quotation) => {
              const quote = document.createElement("blockquote");
              quote.className = "documents_quote";
              quote.innerText = quotation.content;
              quotesParent.appendChild(quote);
            });
          });
    });
});