const { errorModal } = require('../../utils/helpers');

const newFormHandler = async function (event) {
    event.preventDefault();

    const donomonTypeId = document.getElementById('type').value;

    const response = await fetch('/api/donomons', {
        method: 'POST',
        body: JSON.stringify({
            donomonTypeId,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        errorModal(response.statusText);
    }
};

document
    .getElementById('new-character')
    .addEventListener('submit', newFormHandler);

//delete donomon button id deleteDonomon by sending to api/donomons/:id delete route
const deleteFormHandler = async function (event) {
    if (event.target.matches('.deleteDonomon')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/donomons/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            errorModal(response.statusText);
        }
    }
};

document
    .getElementsByClassName('character-party')[0]
    .addEventListener('click', deleteFormHandler);
