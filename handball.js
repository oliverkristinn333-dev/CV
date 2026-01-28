// EHF EURO 2026 Tournament Data
const TOURNAMENT_TEAMS = [
    // Group A
    { id: 1, name: 'Germany', group: 'A', flag: 'de' },
    { id: 2, name: 'Spain', group: 'A', flag: 'es' },
    { id: 3, name: 'Austria', group: 'A', flag: 'at' },
    { id: 4, name: 'Serbia', group: 'A', flag: 'rs' },
    // Group B
    { id: 5, name: 'Denmark', group: 'B', flag: 'dk' },
    { id: 6, name: 'Portugal', group: 'B', flag: 'pt' },
    { id: 7, name: 'North Macedonia', group: 'B', flag: 'mk' },
    { id: 8, name: 'Romania', group: 'B', flag: 'ro' },
    // Group C
    { id: 9, name: 'Norway', group: 'C', flag: 'no' },
    { id: 10, name: 'France', group: 'C', flag: 'fr' },
    { id: 11, name: 'Czechia', group: 'C', flag: 'cz' },
    { id: 12, name: 'Ukraine', group: 'C', flag: 'ua' },
    // Group D
    { id: 13, name: 'Slovenia', group: 'D', flag: 'si' },
    { id: 14, name: 'Switzerland', group: 'D', flag: 'ch' },
    { id: 15, name: 'Faroe Islands', group: 'D', flag: 'fo' },
    { id: 16, name: 'Montenegro', group: 'D', flag: 'me' },
    // Group E
    { id: 17, name: 'Sweden', group: 'E', flag: 'se' },
    { id: 18, name: 'Croatia', group: 'E', flag: 'hr' },
    { id: 19, name: 'Netherlands', group: 'E', flag: 'nl' },
    { id: 20, name: 'Georgia', group: 'E', flag: 'ge' },
    // Group F
    { id: 21, name: 'Iceland', group: 'F', flag: 'is' },
    { id: 22, name: 'Hungary', group: 'F', flag: 'hu' },
    { id: 23, name: 'Italy', group: 'F', flag: 'it' },
    { id: 24, name: 'Poland', group: 'F', flag: 'pl' }
];

// Fixture Generation
const FIXTURES = [
    // Group A
    { id: 101, group: 'A', date: '2026-01-15', team1: 1, team2: 4 }, // Germany vs Serbia
    { id: 102, group: 'A', date: '2026-01-15', team1: 2, team2: 3 }, // Spain vs Austria
    { id: 103, group: 'A', date: '2026-01-17', team1: 1, team2: 3 }, // Germany vs Austria
    { id: 104, group: 'A', date: '2026-01-17', team1: 4, team2: 2 }, // Serbia vs Spain
    { id: 105, group: 'A', date: '2026-01-19', team1: 1, team2: 2 }, // Germany vs Spain
    { id: 106, group: 'A', date: '2026-01-19', team1: 3, team2: 4 }, // Austria vs Serbia
    
    // Group B
    { id: 201, group: 'B', date: '2026-01-15', team1: 5, team2: 8 }, // Denmark vs Romania
    { id: 202, group: 'B', date: '2026-01-15', team1: 6, team2: 7 }, // Portugal vs N.Macedonia
    { id: 203, group: 'B', date: '2026-01-17', team1: 5, team2: 7 }, // Denmark vs N.Macedonia
    { id: 204, group: 'B', date: '2026-01-17', team1: 8, team2: 6 }, // Romania vs Portugal
    { id: 205, group: 'B', date: '2026-01-19', team1: 5, team2: 6 }, // Denmark vs Portugal
    { id: 206, group: 'B', date: '2026-01-19', team1: 7, team2: 8 }, // N.Macedonia vs Romania

    // Group C
    { id: 301, group: 'C', date: '2026-01-15', team1: 9, team2: 12 }, // Norway vs Ukraine
    { id: 302, group: 'C', date: '2026-01-15', team1: 10, team2: 11 }, // France vs Czechia
    { id: 303, group: 'C', date: '2026-01-17', team1: 9, team2: 11 }, // Norway vs Czechia
    { id: 304, group: 'C', date: '2026-01-17', team1: 12, team2: 10 }, // Ukraine vs France
    { id: 305, group: 'C', date: '2026-01-19', team1: 9, team2: 10 }, // Norway vs France
    { id: 306, group: 'C', date: '2026-01-19', team1: 11, team2: 12 }, // Czechia vs Ukraine

    // Group D
    { id: 401, group: 'D', date: '2026-01-16', team1: 13, team2: 16 }, // Slovenia vs Montenegro
    { id: 402, group: 'D', date: '2026-01-16', team1: 14, team2: 15 }, // Switzerland vs Faroe Islands
    { id: 403, group: 'D', date: '2026-01-18', team1: 13, team2: 15 }, // Slovenia vs Faroe Islands
    { id: 404, group: 'D', date: '2026-01-18', team1: 16, team2: 14 }, // Montenegro vs Switzerland
    { id: 405, group: 'D', date: '2026-01-20', team1: 13, team2: 14 }, // Slovenia vs Switzerland
    { id: 406, group: 'D', date: '2026-01-20', team1: 15, team2: 16 }, // Faroe Islands vs Montenegro

    // Group E
    { id: 501, group: 'E', date: '2026-01-16', team1: 17, team2: 20 }, // Sweden vs Georgia
    { id: 502, group: 'E', date: '2026-01-16', team1: 18, team2: 19 }, // Croatia vs Netherlands
    { id: 503, group: 'E', date: '2026-01-18', team1: 17, team2: 19 }, // Sweden vs Netherlands
    { id: 504, group: 'E', date: '2026-01-18', team1: 20, team2: 18 }, // Georgia vs Croatia
    { id: 505, group: 'E', date: '2026-01-20', team1: 17, team2: 18 }, // Sweden vs Croatia
    { id: 506, group: 'E', date: '2026-01-20', team1: 19, team2: 20 }, // Netherlands vs Georgia

    // Group F
    { id: 601, group: 'F', date: '2026-01-16', team1: 21, team2: 24 }, // Iceland vs Poland
    { id: 602, group: 'F', date: '2026-01-16', team1: 22, team2: 23 }, // Hungary vs Italy
    { id: 603, group: 'F', date: '2026-01-18', team1: 21, team2: 23 }, // Iceland vs Italy
    { id: 604, group: 'F', date: '2026-01-18', team1: 24, team2: 22 }, // Poland vs Hungary
    { id: 605, group: 'F', date: '2026-01-20', team1: 21, team2: 22 }, // Iceland vs Hungary
    { id: 606, group: 'F', date: '2026-01-20', team1: 23, team2: 24 }  // Italy vs Poland
];

// State
let predictions = {}; 

document.addEventListener('DOMContentLoaded', () => {
    loadPredictions();
    renderFixtures();
    updateStandings();
});

function loadPredictions() {
    const saved = localStorage.getItem('ehfEuroPredictions');
    if (saved) predictions = JSON.parse(saved);
}

function savePredictions() {
    localStorage.setItem('ehfEuroPredictions', JSON.stringify(predictions));
}

function updateScore(fixtureId, teamIndex, score) {
    if (!predictions[fixtureId]) predictions[fixtureId] = { score1: null, score2: null };
    const val = score === '' ? null : parseInt(score);
    if (teamIndex === 1) predictions[fixtureId].score1 = val;
    else predictions[fixtureId].score2 = val;
    savePredictions();
    updateStandings();
}

function renderFixtures() {
    const fixturesContainer = document.getElementById('fixturesList');
    const byDate = {};
    FIXTURES.forEach(f => {
        if (!byDate[f.date]) byDate[f.date] = [];
        byDate[f.date].push(f);
    });
    const sortedDates = Object.keys(byDate).sort();
    fixturesContainer.innerHTML = sortedDates.map(date => {
        const d = new Date(date);
        const dateStr = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
        return `
            <div class="date-section">
                <h3 class="date-header">${dateStr}</h3>
                <div class="fixtures-grid">
                    ${byDate[date].map(f => {
                        const t1 = TOURNAMENT_TEAMS.find(t => t.id === f.team1);
                        const t2 = TOURNAMENT_TEAMS.find(t => t.id === f.team2);
                        const pred = predictions[f.id] || { score1: '', score2: '' };
                        return `
                            <div class="fixture-card">
                                <div class="fixture-info">Group ${f.group}</div>
                                <div class="fixture-teams">
                                    <div class="team-input">
                                        <img src="https://flagcdn.com/24x18/${t1.flag}.png" class="flag-icon" alt="${t1.name}">
                                        <span class="team-name">${t1.name}</span>
                                        <input type="number" min="0" value="${pred.score1 ?? ''}" oninput="updateScore(${f.id}, 1, this.value)">
                                    </div>
                                    <span class="vs">:</span>
                                    <div class="team-input">
                                        <input type="number" min="0" value="${pred.score2 ?? ''}" oninput="updateScore(${f.id}, 2, this.value)">
                                        <span class="team-name">${t2.name}</span>
                                        <img src="https://flagcdn.com/24x18/${t2.flag}.png" class="flag-icon" alt="${t2.name}">
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function updateStandings() {
    const groupsContainer = document.getElementById('groupsContainer');
    const stats = {};
    TOURNAMENT_TEAMS.forEach(t => stats[t.id] = { ...t, gp:0, w:0, d:0, l:0, gf:0, ga:0, gd:0, pts:0 });
    
    Object.keys(predictions).forEach(id => {
        const f = FIXTURES.find(x => x.id == id);
        const p = predictions[id];
        if (p.score1 !== null && p.score2 !== null) {
            const t1 = stats[f.team1], t2 = stats[f.team2];
            t1.gp++; t2.gp++;
            t1.gf += p.score1; t1.ga += p.score2;
            t2.gf += p.score2; t2.ga += p.score1;
            if (p.score1 > p.score2) { t1.w++; t1.pts += 2; t2.l++; }
            else if (p.score1 < p.score2) { t2.w++; t2.pts += 2; t1.l++; }
            else { t1.d++; t1.pts++; t2.d++; t2.pts++; }
            t1.gd = t1.gf - t1.ga; t2.gd = t2.gf - t2.ga;
        }
    });

    const groups = ['A','B','C','D','E','F'];
    groupsContainer.innerHTML = groups.map(g => {
        const gTeams = Object.values(stats).filter(t => t.group === g);
        const sorted = sortTeamsByEHFRules(gTeams);
        return `
            <div class="group-standings">
                <h3>Group ${g}</h3>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Pos</th><th>Team</th><th>GP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th></tr></thead>
                        <tbody>
                            ${sorted.map((t, i) => `
                                <tr class="${i < 2 ? 'qualifier' : ''}">
                                    <td>${i+1}</td>
                                    <td class="team-cell">
                                        <img src="https://flagcdn.com/16x12/${t.flag}.png" class="flag-icon-small" alt="${t.name}">
                                        ${t.name}
                                    </td>
                                    <td>${t.gp}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
                                    <td>${t.gf}</td><td>${t.ga}</td><td>${t.gd > 0 ? '+':''}${t.gd}</td>
                                    <td>${t.pts}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
}

function sortTeamsByEHFRules(teams) {
    return [...teams].sort((a,b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        const level = teams.filter(t => t.pts === a.pts);
        if (level.length > 1) {
            const h2h = calculateH2H(level);
            if (h2h[b.id].pts !== h2h[a.id].pts) return h2h[b.id].pts - h2h[a.id].pts;
            if (h2h[b.id].gd !== h2h[a.id].gd) return h2h[b.id].gd - h2h[a.id].gd;
            if (h2h[b.id].gf !== h2h[a.id].gf) return h2h[b.id].gf - h2h[a.id].gf;
        }
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });
}

function calculateH2H(levelTeams) {
    const ids = levelTeams.map(t => t.id);
    const h2h = {};
    ids.forEach(id => h2h[id] = { pts:0, gd:0, gf:0 });
    FIXTURES.forEach(f => {
        if (ids.includes(f.team1) && ids.includes(f.team2)) {
            const p = predictions[f.id];
            if (p && p.score1 !== null && p.score2 !== null) {
                const h = h2h[f.team1], a = h2h[f.team2];
                h.gf += p.score1; h.gd += (p.score1 - p.score2);
                a.gf += p.score2; a.gd += (p.score2 - p.score1);
                if (p.score1 > p.score2) h.pts += 2;
                else if (p.score1 < p.score2) a.pts += 2;
                else { h.pts++; a.pts++; }
            }
        }
    });
    return h2h;
}

function resetTournament() {
    if (confirm('Reset all predictions?')) {
        predictions = {};
        savePredictions();
        renderFixtures();
        updateStandings();
    }
}
