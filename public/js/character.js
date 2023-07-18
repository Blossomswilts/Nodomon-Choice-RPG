const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="character-title"]').value;
    const body = document.querySelector('textarea[name="character-body"]').value;

    await fetch('/api/character', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
};

document
    .querySelector('#new-character-form')
    .addEventListener('submit', newFormHandler);
