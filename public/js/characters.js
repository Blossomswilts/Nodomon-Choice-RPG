const newFormHandler = async function (event) {
    event.preventDefault();

    // const name = document.getElementById('name').value;
    const donomonTypeId = document.getElementById('type').value;

    const response = await fetch('/api/donomons', {
        method: 'POST',
        body: JSON.stringify({
            // name,
            donomonTypeId,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

document
    .getElementById('new-character')
    .addEventListener('submit', newFormHandler);
