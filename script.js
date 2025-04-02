const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red Dead Redemption 2', 'CS:GO 2', 'FORZA 5', 'CYBERPUNK', 'Assassins Creed Shadows', 'Minecraft'],
        datasets: [{
            label: '# HORAS JOGADAS',
            data: [5000, 4700, 4200, 4800, 4500, 4900], 
            borderWidth: 1,
            backgroundColor: 'rgba(255, 165, 0, 0.8)',
            borderColor: 'rgba(255, 140, 0, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 6000 
            }
        },
        barThickness: 40
    }
});

const ctx2 = document.getElementById('myFriendsChart');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Minecraft', 'Cuphead', 'Reppo', 'Left 4 Dead 2', 'Among Us', 'Dragon Ball Sparking 0'],
        datasets: [{
            label: 'Horas Jogadas com Amigos',
            data: [5200, 3100, 4200, 3900, 4500, 4800], 
            borderWidth: 1,
            backgroundColor: 'rgba(255, 165, 0, 0.8)',
            borderColor: 'rgba(255, 140, 0, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            y: {
                beginAtZero: true,
                max: 6000 
            }
        },
        barThickness: 40
    }
});
