const newFormHandler = async function (event) {
    event.preventDefault();

    // const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;

    await fetch('/api/character', {
        method: 'POST',
        body: JSON.stringify({
            // name,
            type,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.reload();
};

document
    .getElementById('new-character')
    .addEventListener('submit', newFormHandler);
