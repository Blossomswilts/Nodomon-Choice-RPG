// Get references to the dropdown and locations list elements
const dropdown = document.querySelector('#dropdown');

// ** Need to figure out what location list is ******************** (Please correct this and delete comment)
const locationsList = document.querySelector('ul');

// Get elements of the WebSocket chat
const sendBtn = document.querySelector('#send');
const messages = document.querySelector('#messages');
const messageBox = document.querySelector('#messageBox');

let ws;

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

// Starts and configures chat upon startup
(function () {
    function showMessage(message) {
        messages.textContent += `\n\n${message}`;
        messages.scrollTop = messages.scrollHeight;
        messageBox.value = '';
    }

    function init() {
        if (ws) {
            ws.onerror = ws.onopen = ws.onclose = null;
            ws.close();
        }
        ws = new WebSocket('ws://');
        ws.onopen = () => {
            console.log('Connection opened');
        };
        ws.onmessage = ({ data }) => showMessage(data);
        ws.onclose = function() {
            ws = null;
        };
    }

    sendBtn.onclick = function() {
        if (!ws) {
            showMessage('No WebSocket connection');
            return;
        }

        ws.send(messageBox.value);
        showMessage(messageBox.value);
    };

    init();
})();
