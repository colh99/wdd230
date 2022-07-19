// Input date and time as form input
document.getElementById('submit').addEventListener('click', AppendDate());
function AppendDate() {
    document.getElementById('timestamp').value = Date.now();
}