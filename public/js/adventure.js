// Get references to the dropdown and locations list elements
const dropdown = document.querySelector('#dropdown');

// ** Need to figure out what location list is ******************** (Please correct this and delete comment)
const locationsList = document.querySelector('ul');

// Add an event listener to the dropdown element
dropdown.addEventListener('change', (event) => {
    // Get the selected value from the dropdown
    const selectedValue = event.target.value;

    // Update the locations list based on the selected value
    if (selectedValue === 'Questions') {
    // If the selected value is "Questions", show the questions
        locationsList.innerHTML = `
      <li></li>
      <li></li>
      <li></li>
    `;
    } else if (selectedValue === 'Answers') {
    // If the selected value is "Answers", show the answers
        locationsList.innerHTML = `
      <li></li>
      <li></li>
      <li></li>
    `;
    } else if (selectedValue === 'Next Evolve') {
    // If the selected value is "Next Evolve", show the next evolve options
        locationsList.innerHTML = `
      <li></li>
      <li></li>
      <li></li>
    `;
    }
});


// Unhide answers that go with the appropriate questions
let allAnswers = document.querySelectorAll('option[data-qid]');

allAnswers.forEach((ans) => {
    let answersQuestion = ans.dataset.qid;
    let parentQ = ans.parentNode.parentNode.dataset.id;

    if (answersQuestion === parentQ) {
        ans.style.display = 'block';
    }
});
