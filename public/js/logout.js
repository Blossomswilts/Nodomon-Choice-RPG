const { errorModal } = require('../../utils/helpers');

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert('You are logged out!');
        document.location.replace('/login');
    } else {
        errorModal(response);
    }
};

document.querySelector('#logout').addEventListener('click', logout);