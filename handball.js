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
    { id: 24, name: 'Poland', group: 'F', flag: 'pl' },
    
    // Virtual Teams for Knockout
    { id: 'MR1-1', name: 'Winner MR I', flag: 'un', virtual: true },
    { id: 'MR1-2', name: 'Runner-up MR I', flag: 'un', virtual: true },
    { id: 'MR1-3', name: '3rd MR I', flag: 'un', virtual: true },
    { id: 'MR2-1', name: 'Winner MR II', flag: 'un', virtual: true },
    { id: 'MR2-2', name: 'Runner-up MR II', flag: 'un', virtual: true },
    { id: 'MR2-3', name: '3rd MR II', flag: 'un', virtual: true },
    { id: 'SF1-W', name: 'Winner SF 1', flag: 'un', virtual: true },
    { id: 'SF1-L', name: 'Loser SF 1', flag: 'un', virtual: true },
    { id: 'SF2-W', name: 'Winner SF 2', flag: 'un', virtual: true },
    { id: 'SF2-L', name: 'Loser SF 2', flag: 'un', virtual: true }
];

// Fixture Generation
const PRELIM_FIXTURES = [
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

const MAIN_ROUND_FIXTURES = [
    // Placeholder logic for Main Round - These would be filled dynamically in a production app
    // We only add the "template" for the MR fixtures here for simplicity.
    { id: 701, group: 'MR I', date: '2026-01-21', team1: 'A1', team2: 'B2' },
    { id: 702, group: 'MR I', date: '2026-01-21', team1: 'B1', team2: 'C2' },
    { id: 703, group: 'MR I', date: '2026-01-21', team1: 'C1', team2: 'A2' },
    // Group II
    { id: 801, group: 'MR II', date: '2026-01-22', team1: 'D1', team2: 'E2' },
    { id: 802, group: 'MR II', date: '2026-01-22', team1: 'E1', team2: 'F2' },
    { id: 803, group: 'MR II', date: '2026-01-22', team1: 'F1', team2: 'D2' }
    // (Additional MR matches would follow standard schedule)
];

const KNOCKOUT_FIXTURES = [
    { id: 901, stage: 'Placement 5/6', date: '2026-01-30', team1: 'MR1-3', team2: 'MR2-3' },
    { id: 902, stage: 'Semi-final 1', date: '2026-01-30', team1: 'MR1-1', team2: 'MR2-2' },
    { id: 903, stage: 'Semi-final 2', date: '2026-01-30', team1: 'MR2-1', team2: 'MR1-2' },
    { id: 904, stage: 'Placement 3/4', date: '2026-02-01', team1: 'SF1-L', team2: 'SF2-L' },
    { id: 905, stage: 'Final', date: '2026-02-01', team1: 'SF1-W', team2: 'SF2-W' }
];

let FIXTURES = [...PRELIM_FIXTURES];

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
    renderFixtures(); // Re-render to update dynamic teams in next stages
    updateStandings();
}

function renderFixtures() {
    const fixturesContainer = document.getElementById('fixturesList');
    const allFixtures = [...PRELIM_FIXTURES, ...MAIN_ROUND_FIXTURES, ...KNOCKOUT_FIXTURES];
    const byDate = {};
    allFixtures.forEach(f => {
        if (!byDate[f.date]) byDate[f.date] = [];
        byDate[f.date].push(f);
    });
    const sortedDates = Object.keys(byDate).sort();
    
    // Resolve dynamic teams for rendering
    const stats = calculateAllStats();

    fixturesContainer.innerHTML = sortedDates.map(date => {
        const d = new Date(date);
        const dateStr = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
        return `
            <div class="date-section">
                <h3 class="date-header">${dateStr}</h3>
                <div class="fixtures-grid">
                    ${byDate[date].map(f => {
                        const t1 = resolveTeam(f.team1, stats);
                        const t2 = resolveTeam(f.team2, stats);
                        const pred = predictions[f.id] || { score1: '', score2: '' };
                        const groupLabel = f.group ? `Group ${f.group}` : f.stage;
                        return `
                            <div class="fixture-card">
                                <div class="fixture-info">${groupLabel}</div>
                                <div class="fixture-teams">
                                    <div class="team-input">
                                        <img src="https://flagcdn.com/24x18/${t1.flag || 'un'}.png" class="flag-icon" alt="${t1.name}">
                                        <span class="team-name">${t1.name}</span>
                                        <input type="number" min="0" value="${pred.score1 ?? ''}" oninput="updateScore(${f.id}, 1, this.value)">
                                    </div>
                                    <span class="vs">:</span>
                                    <div class="team-input">
                                        <input type="number" min="0" value="${pred.score2 ?? ''}" oninput="updateScore(${f.id}, 2, this.value)">
                                        <span class="team-name">${t2.name}</span>
                                        <img src="https://flagcdn.com/24x18/${t2.flag || 'un'}.png" class="flag-icon" alt="${t2.name}">
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

function resolveTeam(teamId, stats) {
    if (typeof teamId === 'number') {
        return TOURNAMENT_TEAMS.find(t => t.id === teamId);
    }
    
    // Preliminary Group Winners (A1, B2, etc)
    if (teamId.length === 2 && ['A','B','C','D','E','F'].includes(teamId[0])) {
        const group = teamId[0];
        const rank = parseInt(teamId[1]) - 1;
        const groupTeams = Object.values(stats).filter(t => t.group === group);
        const sorted = sortTeamsByEHFRules(groupTeams, PRELIM_FIXTURES);
        return sorted[rank] || { name: teamId, flag: 'un' };
    }

    // Main Round Rank (MR1-1, etc)
    if (teamId.startsWith('MR')) {
        const mrGroup = teamId.startsWith('MR1-') ? 'MR I' : 'MR II';
        const rank = parseInt(teamId.split('-')[1]) - 1;
        const mrResults = calculateMainRoundStandings(mrGroup, stats);
        return mrResults[rank] || { name: teamId, flag: 'un' };
    }

    // Semi-final Results (SF1-W, etc)
    if (teamId.startsWith('SF')) {
        const sfId = teamId.startsWith('SF1') ? 902 : 903;
        const pred = predictions[sfId];
        const f = KNOCKOUT_FIXTURES.find(x => x.id === sfId);
        if (pred && pred.score1 !== null && pred.score2 !== null) {
            const t1 = resolveTeam(f.team1, stats);
            const t2 = resolveTeam(f.team2, stats);
            if (teamId.endsWith('-W')) return pred.score1 > pred.score2 ? t1 : t2;
            else return pred.score1 > pred.score2 ? t2 : t1;
        }
        return { name: teamId, flag: 'un' };
    }

    return TOURNAMENT_TEAMS.find(t => t.id === teamId) || { name: teamId, flag: 'un' };
}

function calculateAllStats() {
    const stats = {};
    TOURNAMENT_TEAMS.filter(t => !t.virtual).forEach(t => {
        stats[t.id] = { ...t, gp:0, w:0, d:0, l:0, gf:0, ga:0, gd:0, pts:0 };
    });
    
    // Only calculate Prelim stats for the resolveTeam calls to work correctly first
    Object.keys(predictions).forEach(id => {
        const f = PRELIM_FIXTURES.find(x => x.id == id);
        if (!f) return;
        const p = predictions[id];
        if (p.score1 !== null && p.score2 !== null) {
            const t1 = stats[f.team1], t2 = stats[f.team2];
            t1.gp++; t2.gp++; t1.gf += p.score1; t1.ga += p.score2; t2.gf += p.score2; t2.ga += p.score1;
            if (p.score1 > p.score2) { t1.w++; t1.pts += 2; t2.l++; }
            else if (p.score1 < p.score2) { t2.w++; t2.pts += 2; t1.l++; }
            else { t1.d++; t1.pts++; t2.d++; t2.pts++; }
            t1.gd = t1.gf - t1.ga; t2.gd = t2.gf - t2.ga;
        }
    });
    return stats;
}

function calculateMainRoundStandings(groupName, prelimStats) {
    const groupMap = { 'MR I': ['A','B','C'], 'MR II': ['D','E','F'] };
    const advancing = [];
    groupMap[groupName].forEach(g => {
        const gTeams = Object.values(prelimStats).filter(t => t.group === g);
        advancing.push(...sortTeamsByEHFRules(gTeams, PRELIM_FIXTURES).slice(0, 2));
    });

    const mrStats = advancing.map(t => ({ ...t, gp:0, w:0, d:0, l:0, gf:0, ga:0, gd:0, pts:0 }));
    const mrFixtures = MAIN_ROUND_FIXTURES.filter(f => f.group === groupName);
    
    // 1. Carry over head-to-head from Prelims
    advancing.forEach(t1 => {
        advancing.forEach(t2 => {
            if (t1.id === t2.id || t1.group !== t2.group) return;
            const prelimMatch = PRELIM_FIXTURES.find(f => 
                (f.team1 === t1.id && f.team2 === t2.id) || (f.team1 === t2.id && f.team2 === t1.id)
            );
            if (prelimMatch && predictions[prelimMatch.id]) {
                const p = predictions[prelimMatch.id];
                if (p.score1 !== null && p.score2 !== null) {
                    const st1 = mrStats.find(s => s.id === t1.id);
                    const st2 = mrStats.find(s => s.id === t2.id);
                    const s1 = prelimMatch.team1 === t1.id ? p.score1 : p.score2;
                    const s2 = prelimMatch.team1 === t1.id ? p.score2 : p.score1;
                    st1.gp++; st2.gp++; st1.gf += s1; st1.ga += s2; st2.gf += s2; st2.ga += s1;
                    if (s1 > s2) { st1.w++; st1.pts += 2; st2.l++; }
                    else if (s1 < s2) { st2.w++; st2.pts += 2; st1.l++; }
                    else { st1.d++; st1.pts++; st2.d++; st2.pts++; }
                    st1.gd = st1.gf - st1.ga; st2.gd = st2.gf - st2.ga;
                }
            }
        });
    });

    // 2. Add Main Round actual fixtures
    mrFixtures.forEach(f => {
        const pred = predictions[f.id];
        if (pred && pred.score1 !== null && pred.score2 !== null) {
            const t1 = resolveTeam(f.team1, prelimStats);
            const t2 = resolveTeam(f.team2, prelimStats);
            const st1 = mrStats.find(s => s.id === t1.id);
            const st2 = mrStats.find(s => s.id === t2.id);
            if (st1 && st2) {
                st1.gp++; st2.gp++; st1.gf += pred.score1; st1.ga += pred.score2; st2.gf += pred.score2; st2.ga += pred.score1;
                if (pred.score1 > pred.score2) { st1.w++; st1.pts += 2; st2.l++; }
                else if (pred.score1 < pred.score2) { st2.w++; st2.pts += 2; st1.l++; }
                else { st1.d++; st1.pts++; st2.d++; st2.pts++; }
                st1.gd = st1.gf - st1.ga; st2.gd = st2.gf - st2.ga;
            }
        }
    });

    return sortTeamsByEHFRules(mrStats, mrFixtures);
}

function updateStandings() {
    const groupsContainer = document.getElementById('groupsContainer');
    const prelimStats = calculateAllStats();
    
    let html = '';

    // Prelim Groups
    const groups = ['A','B','C','D','E','F'];
    html += groups.map(g => {
        const gTeams = Object.values(prelimStats).filter(t => t.group === g);
        const sorted = sortTeamsByEHFRules(gTeams, PRELIM_FIXTURES);
        return renderStandingTable(`Group ${g}`, sorted);
    }).join('');

    // Main Round Groups
    ['MR I', 'MR II'].forEach(mr => {
        const sorted = calculateMainRoundStandings(mr, prelimStats);
        html += renderStandingTable(mr, sorted, 2); // Top 2 advance to SF
    });

    groupsContainer.innerHTML = html;
}

function renderStandingTable(title, sorted, qualifierCount = 2) {
    return `
        <div class="group-standings">
            <h3>${title}</h3>
            <div class="table-container">
                <table>
                    <thead><tr><th>Pos</th><th>Team</th><th>GP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th></tr></thead>
                    <tbody>
                        ${sorted.map((t, i) => `
                            <tr class="${i < qualifierCount ? 'qualifier' : ''}">
                                <td>${i+1}</td>
                                <td class="team-cell">
                                    <img src="https://flagcdn.com/16x12/${t.flag || 'un'}.png" class="flag-icon-small" alt="${t.name}">
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
}

function sortTeamsByEHFRules(teams, contextFixtures) {
    return [...teams].sort((a,b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        const level = teams.filter(t => t.pts === a.pts);
        if (level.length > 1) {
            const h2h = calculateH2H(level, contextFixtures);
            if (h2h[b.id].pts !== h2h[a.id].pts) return h2h[b.id].pts - h2h[a.id].pts;
            if (h2h[b.id].gd !== h2h[a.id].gd) return h2h[b.id].gd - h2h[a.id].gd;
            if (h2h[b.id].gf !== h2h[a.id].gf) return h2h[b.id].gf - h2h[a.id].gf;
        }
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });
}

function calculateH2H(levelTeams, contextFixtures) {
    const ids = levelTeams.map(t => t.id);
    const h2h = {};
    ids.forEach(id => h2h[id] = { pts:0, gd:0, gf:0 });
    contextFixtures.forEach(f => {
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
