document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('dateNightForm');
    const tableBody = document.querySelector('#dateNightTable tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const date = document.getElementById('date').value;
        const activity = document.getElementById('activity').value;
        const satisfaction = document.getElementById('satisfaction').value;
        const notes = document.getElementById('notes').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${date}</td>
        <td>${activity}</td
        <td>${satisfaction}</td>
        <td>${notes}</td>
        `;

        tableBody.appendChild(newRow);

        form.reset();
    });
});