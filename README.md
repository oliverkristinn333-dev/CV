# Handball Tournament Standings Calculator

A web-based tool for calculating and managing national handball tournament standings.

## Features
- **Team Management**: Add and remove participating teams.
- **Match Recording**: Record goal scores for home and away teams.
- **Real-time Standings**: Automatically updates the league table based on match results.
  - Wins: 2 points
  - Draws: 1 point
  - Losses: 0 points
- **Sorting**: Teams are ranked by Points, Goal Difference, and Goals For.
- **Persistence**: Data is saved to your browser's local storage.

## How to use
1. Open `index.html` in your browser.
2. Add teams in the "Team Management" section.
3. Record matches in the "Record Match Result" section.
4. View the "Current Standings" table for rankings.

## Local Development
To run a local server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.
