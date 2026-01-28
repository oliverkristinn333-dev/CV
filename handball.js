// Tournament data structure
let teams = [];
let matches = [];

// Load data from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    updateTeamSelects();
    updateStandings();
    updateMatchHistory();
});

// Save data to localStorage
function saveData() {
    localStorage.setItem('handballTeams', JSON.stringify(teams));
    localStorage.setItem('handballMatches', JSON.stringify(matches));
}

// Load data from localStorage
function loadData() {
    const savedTeams = localStorage.getItem('handballTeams');
    const savedMatches = localStorage.getItem('handballMatches');
    
    if (savedTeams) {
        teams = JSON.parse(savedTeams);
        renderTeamsList();
    }
    
    if (savedMatches) {
        matches = JSON.parse(savedMatches);
    }
}

// Add a new team
function addTeam() {
    const teamNameInput = document.getElementById('teamName');
    const teamGroupInput = document.getElementById('teamGroup');
    const teamName = teamNameInput.value.trim();
    const group = teamGroupInput.value;
    
    if (!teamName) {
        alert('Please enter a team name');
        return;
    }
    
    // Check for duplicate team names
    if (teams.some(team => team.name.toLowerCase() === teamName.toLowerCase())) {
        alert('This team already exists');
        return;
    }
    
    const newTeam = {
        id: Date.now(),
        name: teamName,
        group: group,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
    };
    
    teams.push(newTeam);
    teamNameInput.value = '';
    
    saveData();
    renderTeamsList();
    updateTeamSelects();
    updateStandings();
}

// Remove a team
function removeTeam(teamId) {
    if (!confirm('Are you sure you want to remove this team? All their matches will be deleted.')) {
        return;
    }
    
    teams = teams.filter(team => team.id !== teamId);
    matches = matches.filter(match => match.homeTeamId !== teamId && match.awayTeamId !== teamId);
    
    saveData();
    renderTeamsList();
    updateTeamSelects();
    recalculateStandings();
    updateMatchHistory();
}

// Render teams list
function renderTeamsList() {
    const teamsList = document.getElementById('teamsList');
    
    if (teams.length === 0) {
        teamsList.innerHTML = '<p class="empty-state">No teams added yet</p>';
        return;
    }
    
    // Sort teams by group then name for display
    const displayTeams = [...teams].sort((a, b) => {
        if (a.group !== b.group) return a.group.localeCompare(b.group);
        return a.name.localeCompare(b.name);
    });

    teamsList.innerHTML = displayTeams.map(team => `
        <div class="team-item">
            <span class="team-name">[Group ${team.group}] ${escapeHtml(team.name)}</span>
            <button class="btn-remove" onclick="removeTeam(${team.id})">Remove</button>
        </div>
    `).join('');
}

// Update team select dropdowns
function updateTeamSelects() {
    const homeSelect = document.getElementById('homeTeam');
    const awaySelect = document.getElementById('awayTeam');
    
    const options = teams.map(team => 
        `<option value="${team.id}">${escapeHtml(team.name)}</option>`
    ).join('');
    
    homeSelect.innerHTML = '<option value="">Select home team</option>' + options;
    awaySelect.innerHTML = '<option value="">Select away team</option>' + options;
}

// Add a match
function addMatch() {
    const homeTeamId = parseInt(document.getElementById('homeTeam').value);
    const awayTeamId = parseInt(document.getElementById('awayTeam').value);
    const homeScore = parseInt(document.getElementById('homeScore').value);
    const awayScore = parseInt(document.getElementById('awayScore').value);
    
    // Validation
    if (!homeTeamId || !awayTeamId) {
        alert('Please select both teams');
        return;
    }
    
    if (homeTeamId === awayTeamId) {
        alert('Home and away teams must be different');
        return;
    }
    
    if (isNaN(homeScore) || isNaN(awayScore) || homeScore < 0 || awayScore < 0) {
        alert('Please enter valid scores (0 or higher)');
        return;
    }
    
    const match = {
        id: Date.now(),
        homeTeamId,
        awayTeamId,
        homeScore,
        awayScore,
        date: new Date().toISOString()
    };
    
    matches.push(match);
    
    // Clear inputs
    document.getElementById('homeTeam').value = '';
    document.getElementById('awayTeam').value = '';
    document.getElementById('homeScore').value = '';
    document.getElementById('awayScore').value = '';
    
    saveData();
    recalculateStandings();
    updateMatchHistory();
}

// Recalculate all standings from scratch
function recalculateStandings() {
    // Reset all team stats
    teams.forEach(team => {
        team.played = 0;
        team.wins = 0;
        team.draws = 0;
        team.losses = 0;
        team.goalsFor = 0;
        team.goalsAgainst = 0;
        team.goalDifference = 0;
        team.points = 0;
    });
    
    // Process all matches
    matches.forEach(match => {
        const homeTeam = teams.find(t => t.id === match.homeTeamId);
        const awayTeam = teams.find(t => t.id === match.awayTeamId);
        
        if (!homeTeam || !awayTeam) return;
        
        // Update games played
        homeTeam.played++;
        awayTeam.played++;
        
        // Update goals
        homeTeam.goalsFor += match.homeScore;
        homeTeam.goalsAgainst += match.awayScore;
        awayTeam.goalsFor += match.awayScore;
        awayTeam.goalsAgainst += match.homeScore;
        
        // Determine result and update stats
        if (match.homeScore > match.awayScore) {
            // Home win
            homeTeam.wins++;
            homeTeam.points += 2;
            awayTeam.losses++;
        } else if (match.homeScore < match.awayScore) {
            // Away win
            awayTeam.wins++;
            awayTeam.points += 2;
            homeTeam.losses++;
        } else {
            // Draw
            homeTeam.draws++;
            awayTeam.draws++;
            homeTeam.points += 1;
            awayTeam.points += 1;
        }
        
        // Update goal difference
        homeTeam.goalDifference = homeTeam.goalsFor - homeTeam.goalsAgainst;
        awayTeam.goalDifference = awayTeam.goalsFor - awayTeam.goalsAgainst;
    });
    
    saveData();
    updateStandings();
}

// Update standings table
function updateStandings() {
    const groupsContainer = document.getElementById('groupsContainer');
    
    if (teams.length === 0) {
        groupsContainer.innerHTML = '<p class="empty-state">Add teams to start the tournament</p>';
        return;
    }
    
    // Group teams by group property
    const groupedTeams = {};
    teams.forEach(team => {
        if (!groupedTeams[team.group]) groupedTeams[team.group] = [];
        groupedTeams[team.group].push(team);
    });
    
    // Sort group names (A, B, C...)
    const sortedGroupNames = Object.keys(groupedTeams).sort();
    
    groupsContainer.innerHTML = sortedGroupNames.map(groupName => {
        const groupTeams = groupedTeams[groupName];
        const sortedTeams = sortTeamsByEHFRules(groupTeams);
        
        return `
            <div class="group-standings">
                <h3>Group ${groupName}</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th title="Games Played">GP</th>
                                <th title="Wins">W</th>
                                <th title="Draws">D</th>
                                <th title="Losses">L</th>
                                <th title="Goals For">GF</th>
                                <th title="Goals Against">GA</th>
                                <th title="Goal Difference">GD</th>
                                <th title="Points">PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${sortedTeams.map((team, index) => {
                                const position = index + 1;
                                const positionClass = position <= 2 ? 'qualifier' : '';
                                return `
                                    <tr class="${positionClass}">
                                        <td>${position}</td>
                                        <td class="team-cell">${escapeHtml(team.name)}</td>
                                        <td>${team.played}</td>
                                        <td>${team.wins}</td>
                                        <td>${team.draws}</td>
                                        <td>${team.losses}</td>
                                        <td>${team.goalsFor}</td>
                                        <td>${team.goalsAgainst}</td>
                                        <td>${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
                                        <td><strong>${team.points}</strong></td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
}

// Implement EHF tie-breaking rules
function sortTeamsByEHFRules(teamsToSort) {
    return [...teamsToSort].sort((a, b) => {
        // 1. Higher points in all matches
        if (b.points !== a.points) return b.points - a.points;

        // Teams are level on points. Check head-to-head.
        // Identify all teams with these points
        const levelTeams = teamsToSort.filter(t => t.points === a.points);
        
        if (levelTeams.length > 1) {
            const h2hStats = calculateSubStandings(levelTeams);
            const statsA = h2hStats[a.id];
            const statsB = h2hStats[b.id];

            // 2. Higher points in head-to-head
            if (statsB.points !== statsA.points) return statsB.points - statsA.points;
            
            // 3. Goal difference in head-to-head
            if (statsB.gd !== statsA.gd) return statsB.gd - statsA.gd;
            
            // 4. Goals scored in head-to-head
            if (statsB.gf !== statsA.gf) return statsB.gf - statsA.gf;
        }

        // 5. Overall goal difference in the group
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;

        // 6. Overall goals scored in the group
        return b.goalsFor - a.goalsFor;
    });
}

// Calculate standings using only matches between a subset of teams
function calculateSubStandings(subsetTeams) {
    const subsetIds = subsetTeams.map(t => t.id);
    const stats = {};
    
    subsetIds.forEach(id => {
        stats[id] = { points: 0, gd: 0, gf: 0 };
    });
    
    matches.forEach(match => {
        if (subsetIds.includes(match.homeTeamId) && subsetIds.includes(match.awayTeamId)) {
            const home = stats[match.homeTeamId];
            const away = stats[match.awayTeamId];
            
            home.gf += match.homeScore;
            home.gd += (match.homeScore - match.awayScore);
            away.gf += match.awayScore;
            away.gd += (match.awayScore - match.homeScore);
            
            if (match.homeScore > match.awayScore) home.points += 2;
            else if (match.homeScore < match.awayScore) away.points += 2;
            else {
                home.points += 1;
                away.points += 1;
            }
        }
    });
    
    return stats;
}

// Update match history
function updateMatchHistory() {
    const matchHistoryList = document.getElementById('matchHistoryList');
    
    if (matches.length === 0) {
        matchHistoryList.innerHTML = '<p class="empty-state">No matches recorded yet</p>';
        return;
    }
    
    // Sort matches by date (most recent first)
    const sortedMatches = [...matches].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    matchHistoryList.innerHTML = sortedMatches.map(match => {
        const homeTeam = teams.find(t => t.id === match.homeTeamId);
        const awayTeam = teams.find(t => t.id === match.awayTeamId);
        
        if (!homeTeam || !awayTeam) return '';
        
        const matchDate = new Date(match.date);
        const dateString = matchDate.toLocaleDateString() + ' ' + 
                          matchDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="match-item">
                <div class="match-teams">
                    <span>${escapeHtml(homeTeam.name)}</span>
                    <span class="match-score">${match.homeScore} : ${match.awayScore}</span>
                    <span>${escapeHtml(awayTeam.name)}</span>
                </div>
                <span class="match-date">${dateString}</span>
            </div>
        `;
    }).join('');
}

// Reset tournament
function resetTournament() {
    if (!confirm('Are you sure you want to reset the entire tournament? This will delete all teams and matches.')) {
        return;
    }
    
    teams = [];
    matches = [];
    
    localStorage.removeItem('handballTeams');
    localStorage.removeItem('handballMatches');
    
    renderTeamsList();
    updateTeamSelects();
    updateStandings();
    updateMatchHistory();
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to add team
document.getElementById('teamName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTeam();
    }
});
