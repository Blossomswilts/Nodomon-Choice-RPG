const socket = io('ws://localhost:8081');
const chatBody = document.querySelector('#chat-box');
const {errorModal} = require('../../utils/helpers');

socket.on('message', text => {
    chatBody.innerHTML = text;
});

//socket.on('broadcast', message => chatBody.innerHTML = message);

document.querySelector('#send').onclick = () => {
    const text = document.querySelector('#message').value;
    socket.emit('message', text);
};

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
        errorModal(response);
    }
}

//Update donomon on click of answer
async function updateDonomon(answerId, questionId) {
    try {
        const response = await fetch(
            `/api/questions/${questionId}/answers/${answerId}`,
            {
                method: 'GET',
            },
        );

        if (response.ok) {
            //update dynamically.
            const donomon = await response.json();
            const donomonName = document.getElementById('activeName');
            const donomonImg = document.getElementById('activeImage');
            const donomonLevel = document.getElementById('activeLevel');
            const donomonExp = document.getElementById('activeExp');
            const donomonMorality = document.getElementById('activeMorality');

            // get active donomon name from session
            donomonImg.setAttribute('src', `/images/nodomon/${donomon.name}.png`);
            donomonName.textContent = donomon.name;
            donomonLevel.textContent = `Level : ${donomon.updatedDonomon.level}`;
            donomonExp.textContent = `Exp : ${donomon.updatedDonomon.exp}`;
            donomonMorality.textContent = `Morality : ${donomon.updatedDonomon.morality}`;
        } else {
            errorModal(response);
        }
    } catch (err) {
        console.log(err);
    }
}

//On dropdown of donomon, set active donomon to the donomon that was clicked
async function setActiveDonomon(donomonId) {
    const response = await fetch(`/api/users/active/${donomonId}`, {
        method: 'PUT',
    });

    if (response.ok) {
        document.location.reload();
    } else {
        errorModal(response);
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

//call updateDonomon on click of answer
const question = document.getElementById('questionText');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

answer1.addEventListener('click', () => {
    const answerId = answer1.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

answer2.addEventListener('click', () => {
    const answerId = answer2.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

answer3.addEventListener('click', () => {
    const answerId = answer3.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

answer4.addEventListener('click', () => {
    const answerId = answer4.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

//Fix so that it only gets called if there is an active donomon*************************
getRandomQuestion();
