const errorModal = async function (response) {
    const error = await response.json();
    const errorModal = document.getElementById('errorModalBody');
    errorModal.innerHTML = error.message;
    $('#errorModal').modal('show');
};

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