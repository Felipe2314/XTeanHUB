document.addEventListener("DOMContentLoaded", function () {
    // Gráfico de Horas Jogadas
    const ctx = document.getElementById("myChart");
    if (ctx) {
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "Red Dead Redemption 2",
                    "CS:GO 2",
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

    

    // Dados do ranking
    let registros = [
        { nome: "Felipe", jogo: "Minecraft", horas: 100 },
        { nome: "Galvao", jogo: "GTA V", horas: 15 },
        { nome: "Samuel", jogo: "Valorant", horas: 8 },
        { nome: "Lael", jogo: "Minecraft", horas: 12 },
        { nome: "Felipe", jogo: "Elden Ring", horas: 9 },
        { nome: "Galvao", jogo: "Fortnite", horas: 14 },
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

    function adicionarHoras() {  // ⬅️ Nome corrigido
        console.log("Botão foi clicado!"); // Verifica se a função está sendo chamada

        let randomIndex = Math.floor(Math.random() * registros.length);
        registros[randomIndex].horas += Math.floor(Math.random() * 5) + 1;
        atualizarTabela();
    }

    // Criando o gráfico
    const ctx2 = document.getElementById("graficoHoras");
    let grafico;

    if (ctx2) {
        grafico = new Chart(ctx2.getContext("2d"), {
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
    }

    function atualizarGrafico() {
        if (!grafico) return; // ⬅️ Evita erro caso o gráfico não exista

        grafico.data.labels = registros.map((r) => `${r.nome} - ${r.jogo}`);
        grafico.data.datasets[0].data = registros.map((r) => r.horas);
        grafico.update();
    }

    atualizarTabela();
});
