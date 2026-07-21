# Disneyland Speedrun

## Project Overview

Disneyland Speedrun is a browser-based JavaScript simulation game where the player attempts to complete every attraction in Disneyland before the park closes.

The core gameplay goal:

> Optimize your route, manage your time, and complete all rides before closing.

The game is currently focused on route planning and simulation. Future updates will add realistic park behavior, including dynamic waits, guests, and crowd simulation.

---

# Current Development Status

## Current Phase

**Phase 2C — Dynamic Wait Times**

Status: Not started

Goal:
Replace static ride wait times with a realistic, changing wait-time simulation based on park crowd levels and attraction popularity.

---

# Completed Milestones

## Phase 1 — Core Foundation

### ✅ Game Framework

Completed:
- HTML canvas setup
- JavaScript game loop
- Rendering system
- Basic UI

Files:
- `index.html`
- `style.css`
- `game.js`
- `ui.js`

---

## ✅ Park Map System

Completed:
- Disneyland node-based map
- Attraction locations
- Park pathways
- Land connections

Current lands:
- Main Street USA
- Central Hub
- Tomorrowland
- Fantasyland
- Adventureland
- Frontierland
- Galaxy's Edge

File:
- `graph.js`

---

## ✅ Pathfinding

Completed:
- BFS pathfinding
- Route calculation
- Connection checking
- Route visualization

File:
- `pathfinding.js`

---

## ✅ Player Movement

Completed:
- Player starting location
- Node movement
- Walking animation
- Destination selection
- Arrival detection

File:
- `player.js`

---

## ✅ Park Clock System

Completed:
- In-game clock
- Park opening time
- Park closing time
- Time advancement

Current park hours:
- 8:00 AM opening
- 12:00 AM closing

File:
- `gameTime.js`

---

## ✅ Ride Completion System

Completed:
- Attraction database
- Ride duration
- Static wait times
- Ride completion tracking
- Win condition

Current attractions:

- Space Mountain
- Matterhorn Bobsleds
- Indiana Jones Adventure
- Big Thunder Mountain
- Rise of the Resistance

Files:
- `rides.js`
- `simulation.js`

---

# Current Game Architecture
