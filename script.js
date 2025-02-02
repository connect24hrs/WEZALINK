const contributionsUrl = 'contributions.json'; // Update this file manually

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(contributionsUrl);
        const contributions = await response.json();
        displayContributions(contributions);
    } catch (error) {
        console.error('Error loading contributions:', error);
        document.getElementById('contributions-body').innerHTML = '<tr><td colspan="4">Failed to load contributions.</td></tr>';
    }
});

function displayContributions(contributions) {
    const tableBody = document.getElementById('contributions-body');
    tableBody.innerHTML = '';

    let totalAmount = 0;

    contributions.forEach((contribution, index) => {
        let amountValue = parseInt(contribution.amount.replace("sh", ""), 10);
        totalAmount += amountValue;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${contribution.name}</td>
            <td>${contribution.amount}</td>
            <td>${contribution.status}</td>
        `;
        tableBody.appendChild(row);
    });
}
