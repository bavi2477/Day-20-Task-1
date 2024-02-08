function fetchFact() {
    return new Promise((resolve, reject) => {
      fetch('https://cat-fact.herokuapp.com/facts/random')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data.text);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  

  function displayFact(fact) {
    const factContainer = document.getElementById('fact-container');
    factContainer.innerHTML = `<p>${fact}</p>`;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetch-button');
  

    fetchButton.addEventListener('click', function() {
      fetchFact()
        .then(fact => {
          displayFact(fact);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    });
  
    fetchFact()
      .then(fact => {
        displayFact(fact);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });