const sendBtn = document.querySelector('#send');
const messages = document.querySelector('#messages');
const messageBox = document.querySelector('#MessageBox');

let ws;

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
        ws = new WebSocket('ws://localhost:6969');
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
function render(question) {
    const questionEl = document.getElementById('questionText');
    questionEl.textContent = question.text;
    questionEl.setAttribute('data-id', question.id);
    question.answer.forEach((answer, i) => {
        const answerEl = document.getElementById(`answer${i + 1}`);
        answerEl.textContent = answer.text;
        answerEl.setAttribute('data-id', answer.id);
    });
}

async function getRandomQuestion() {
    const response = await fetch('/api/questions/random', {
        method: 'GET',
    });

    if (response.ok) {
        const question = await response.json();
        render(question);
    } else {
        alert(response.statusText);
    }
}

//On dropdown of donomon, set active donomon to the donomon that was clicked
async function setActiveDonomon(donomonId) {
    const response = await fetch(`/api/users/active/${donomonId}`, {
        method: 'PUT',
    });

    if (response.ok) {
        const donomon = await response.json();
        render(donomon);
    } else {
        alert(response.statusText);
    }
}

//___________________________________________________________Active Donomon___________________________________________________________
const dropDownItems = document.querySelectorAll('.donomonSelect');

dropDownItems.forEach((item) => {
    item.addEventListener('click', () => {
        const donomonId = item.dataset.id;
        setActiveDonomon(donomonId);
    });
});


getRandomQuestion();
