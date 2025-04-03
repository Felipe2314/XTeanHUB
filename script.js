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




// Lista de usuários, jogos e horas jogadas
let registros = [
    { nome: "Felipe", jogo: "FIFA 24", horas: 10 },
    { nome: "Geovana", jogo: "GTA V", horas: 15 },
    { nome: "Lucas", jogo: "Valorant", horas: 8 },
    { nome: "Ana", jogo: "Minecraft", horas: 12 },
    { nome: "Felipe", jogo: "Elden Ring", horas: 9 },
    { nome: "Geovana", jogo: "Fortnite", horas: 14 }
];

// Função para atualizar a tabela
function atualizarTabela() {
    let tabela = document.getElementById("rankingTable").getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; // Limpa a tabela antes de atualizar

    // Ordena os registros por horas jogadas (maior para menor)
    registros.sort((a, b) => b.horas - a.horas);

    // Insere os dados na tabela
    registros.forEach((registro, index) => {
        let linha = tabela.insertRow();
        linha.innerHTML = `<td>${index + 1}</td><td>${registro.nome}</td><td>${registro.jogo}</td><td>${registro.horas}</td>`;
    });

    atualizarGrafico(); // Atualiza o gráfico também
}

// Função para adicionar horas aleatórias a um registro
function adicionarHoras() {
    let randomIndex = Math.floor(Math.random() * registros.length); // Escolhe um registro aleatório
    registros[randomIndex].horas += Math.floor(Math.random() * 5); // Adiciona horas aleatórias
    atualizarTabela(); // Atualiza a tabela e o gráfico
}

// Configuração do gráfico com Chart.js
let ctx = document.getElementById("graficoHoras").getContext("2d");
let grafico = new Chart(ctx, {
    type: "bar",
    data: {
        labels: registros.map(r => `${r.nome} - ${r.jogo}`), // Nome + Jogo
        datasets: [{
            label: "Horas Jogadas",
            data: registros.map(r => r.horas), // Quantidade de horas
            backgroundColor: "orange"
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Função para atualizar o gráfico
function atualizarGrafico() {
    grafico.data.labels = registros.map(r => `${r.nome} - ${r.jogo}`);
    grafico.data.datasets[0].data = registros.map(r => r.horas);
    grafico.update(); // Atualiza o gráfico
}

// Inicializa a tabela e o gráfico ao carregar a página
atualizarTabela();
