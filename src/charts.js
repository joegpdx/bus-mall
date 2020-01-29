const results = JSON.parse(localStorage.getItem('votes'));


const votes = [];
const labels = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('results').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: ['blue', 'yellow', 'green', 'purple', 'orange', '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

document.getElementById('results').textContent = JSON.stringify(results, 0, 2);