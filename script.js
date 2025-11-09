// Cole sua chave aqui entre as aspas:
const API_KEY = "3b585feaa00d393991b464f96e6a0ad5";

fetch("https://v3.football.api-sports.io/fixtures?date=2025-11-09", {
  method: "GET",
  headers: {
    "x-apisports-key": API_KEY
  }
})
.then(res => res.json())
.then(data => {
  const games = document.getElementById("games");
  data.response.forEach(match => {
    const div = document.createElement("div");
    div.className = "match";
    div.innerHTML = `
      <h3>${match.teams.home.name} 🆚 ${match.teams.away.name}</h3>
      <p>🏟️ ${match.league.name}</p>
      <p>⏰ ${match.fixture.date}</p>
    `;
    games.appendChild(div);
  });
})
.catch(err => {
  console.error("Erro:", err);
  document.getElementById("games").innerHTML = "<p>Erro ao carregar partidas.</p>";
});
