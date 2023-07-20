const signupFormHandler = async function (event) {
    event.preventDefault();

    const nameEl = document.querySelector('#name-signup');
    const passwordEl = document.querySelector('#password-signup');
    const emailEl = document.querySelector('#email-signup');

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            name: nameEl.value,
            password: passwordEl.value,
            email: emailEl.nodeValue
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
