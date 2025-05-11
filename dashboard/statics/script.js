document.addEventListener("DOMContentLoaded", function () {
    // Gráfico de Horas Jogadas
    const ctx = document.getElementById("myChart");
    if (ctx) {
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Red Dead Redemption 2",
                    "CS2",
                    "FORZA 5",
                    "CYBERPUNK",
                    "Assassins Creed Shadows",
                    "Minecraft",
                ],
                datasets: [
                    {
                        label: "# HORAS JOGADAS",
                        data: [5000, 4700, 4200, 4800, 4500, 4900],
                        borderWidth: 1,
                        backgroundColor: "rgba(255, 165, 0, 0.8)",
                        borderColor: "rgba(255, 140, 0, 1)",
                        barThickness: "flex", // Melhor responsividade
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, max: 6000 },
                },
            },
        });
    }

    // Gráfico de Horas Jogadas com Amigos
    const ctx2 = document.getElementById("myFriendsChart");
    if (ctx2) {
        new Chart(ctx2, {
            type: "bar",
            data: {
                labels: [
                    "Minecraft",
                    "Cuphead",
                    "Reppo",
                    "Left 4 Dead 2",
                    "Among Us",
                    "Dragon Ball Sparking 0",
                ],
                datasets: [
                    {
                        label: "Horas Jogadas com Amigos",
                        data: [5200, 3100, 4200, 3900, 4500, 4800],
                        borderWidth: 1,
                        backgroundColor: "rgba(255, 165, 0, 0.8)",
                        borderColor: "rgba(255, 140, 0, 1)",
                        barThickness: "flex",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, max: 6000 },
                },
            },
        });
    }

    // Dados do ranking
    let registros = [
        { nome: "Felipe", jogo: "FIFA 24", horas: 10 },
        { nome: "Samuel", jogo: "GTA V", horas: 15 },
        { nome: "Galvao", jogo: "Valorant", horas: 8 },
        { nome: "Lael", jogo: "Counter Strike 2", horas: 12 },
        { nome: "Felipe", jogo: "Elden Ring", horas: 9 },
        { nome: "Samuel", jogo: "Fortnite", horas: 14 },
    ];

    function atualizarTabela() {
        let tabela = document.getElementById("rankingTable");
        if (!tabela) return;

        let tbody = tabela.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";

        registros.sort((a, b) => b.horas - a.horas);

        registros.forEach((registro, index) => {
            let linha = tbody.insertRow();
            linha.innerHTML = `<td>${index + 1}</td><td>${registro.nome}</td><td>${registro.jogo}</td><td>${registro.horas}</td>`;
        });

        atualizarGrafico();
    }

    function adicionarHoras() {
        let randomIndex = Math.floor(Math.random() * registros.length);
        registros[randomIndex].horas += Math.floor(Math.random() * 5) + 1;
        atualizarTabela();
    }

    // Verifica se existe o gráfico antes de criar
    const ctx3 = document.getElementById("graficoHoras");
    if (ctx3) {
        let grafico = new Chart(ctx3.getContext("2d"), {
            type: "bar",
            data: {
                labels: registros.map((r) => `${r.nome} - ${r.jogo}`),
                datasets: [
                    {
                        label: "Horas Jogadas",
                        data: registros.map((r) => r.horas),
                        backgroundColor: "orange",
                    },
                ],
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } },
            },
        });

        function atualizarGrafico() {
            grafico.data.labels = registros.map((r) => `${r.nome} - ${r.jogo}`);
            grafico.data.datasets[0].data = registros.map((r) => r.horas);
            grafico.update();
        }
    }

    atualizarTabela();
});
