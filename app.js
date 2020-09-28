// import functions and grab DOM elements
import { countsAsAYes } from './countsAsAYes.js';
// initialize state

// set event listeners to update state and DOM

// 1) WHAT: We need these HTML elements:
// - We need some copy/content for the user to  (no id)
// - Button (needs an id)
//     - Why? Initiate the prompts
// - Span/Div/Section (needs an id) to inject the results text into to show the user their score
const button = document.getElementById('quiz-button');
const results = document.getElementById('results');


// 1) WHEN: Add an event listener to the click of the button

button.addEventListener('click', () => {

    const userName = prompt('What is your name?');

    const userConsent = confirm('Would you like to take this quiz?');

    if (!userConsent) {
        alert('Oh Good! You don\'t need to take it. Exiting now.');
        return;
    }


    let correctAnswers = 0;


    const widelyUsed = prompt(`${userName}, Is yarrow a widely used medicinal herb? Yes or no?`);

    if (countsAsAYes(widelyUsed)) {
        correctAnswers++;
    }

    const bloodStopping = prompt(`${userName}, Is yarrow known for its ability to stop bleeding when applied directly to a wound? Yes or no?`);

    if (countsAsAYes(bloodStopping)) {
        correctAnswers++;
    }

    const wingsResponse = prompt(`${userName}, Does yarrow give you wings?`);

    if (!countsAsAYes(wingsResponse)) {
        correctAnswers++;
    }

    alert('Nice! You have completed the quiz. Please check the page for your response.');



    results.textContent = `${userName}, you got ${correctAnswers} right out of 3!`;


});
    


    
    
    
    
    
    // 1) Three YES/NO questions (using `prompt` calls) about the subject. Use your `countsAsAYes` function to determine the user's response, then compare to the correct answer. Track number of correct responses.



// user is correct (the answer is yes)!

// we need to track the STATE of their correct answers



// user is correct (the answer is yes)!

// we need to track the STATE of their correct answers


// user is correct (The answer is no)!

// we need to track the STATE of their correct answers




// 1) Alert the user that the quiz is complete and their results will now be written to the webpage.


// 1) Write a response to the page with their name and number correct out of the total. For example: "Okay Bernice, you got 2/3 correct".   