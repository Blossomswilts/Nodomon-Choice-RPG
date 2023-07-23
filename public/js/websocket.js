const wss = new WebSocket('wss://localhost:3001');
const send = document.getElementById('send');
const messages = document.getElementById('messages').value;
const text = document.getElementById('text').value;

function sendMessage() {
    wss.on('message', data => {
        
    })
}

send.addEventListener('click', )