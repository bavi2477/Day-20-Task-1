# Cat Facts Web App

This is a simple web application that fetches random facts about cats from an external API and displays them on a webpage. Users can click a button to fetch a new random fact or let a fact display automatically when the page loads.

## Technologies Used
- HTML
- CSS (Bootstrap)
- JavaScript

## Project Structure

cat-facts/
│
├── css/
│ └── style.css # Stylesheet file for the webpage
│
├── js/
│ └── script.js # JavaScript file for fetching and displaying cat facts
│
├── index.html # Main HTML file for the webpage
│
└── README.md # Project README file

## Setup Instructions
1. Clone the repository to your local machine:

git clone <repository-url>

2. Open the `index.html` file in your web browser.

3. Click the "Fetch Random Fact" button to display a random cat fact.

## Functionality

- `index.html`: This is the main HTML file that contains the structure of the webpage. It includes a container for displaying cat facts and a button to fetch new facts.

- `style.css`: This file contains the styles for the webpage, including the appearance of the fact container and the fetch button.

- `script.js`: This JavaScript file handles fetching random cat facts from the external API (`https://cat-fact.herokuapp.com/facts/random`). It also contains functions to display the fetched facts on the webpage. Event listeners are added to the fetch button to trigger the fetching of new facts both on button click and when the page loads.

## Credits
- This project was created by [Bavithra].
- Cat facts are fetched from the [Cat Facts API](https://cat-fact.herokuapp.com/).