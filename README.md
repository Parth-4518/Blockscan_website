# Blockscan_website

A collaborative full-stack company website developed by a 10-member team, featuring responsive design, modern UI, backend integration, and database support.

## Completed Tasks

```
[x] Add the real shape recognization in AI air drawing (3hr)
    - Implemented shakiness detection (calculateShakiness())
    - Added lenient classification with threshold boost for shaky strokes
    - Robust circle fit using median radius (outlier-resistant)
    - PCA-based orientation for squares, triangles, rectangles
    - Lowered correction threshold from 10 to 5 points
    - More lenient closed-shape check (50% diagonal vs 30%)
    - Fallback detection for unclosed shapes
    - Debug mode with raw stroke overlay (red dashed line)
    - Green glow on corrected shapes for visual confirmation
    - FPS meter in top-right corner (color-coded)

[x] Dark/Light Theme Toggle (1-2hr)

[x] Smart Connect — auto-connect nearby endpoints to close shapes (2hr)

[x] Backend sync (1.5hr)

[x] review the changes (1-2hr)

1. All the PR Merge Conflict Resolved (2hr)
2. Backend Server Fix
3. Servers Started Both servers verified working
4. Repo Sync
    - Switched to main branch
    - Pulled latest changes from origin

[x] made a full documentation (30-45min)
```

## All Features in Air Drawing App

```
Core Drawing
[x] Hand tracking via MediaPipe
[x] Gesture control (DRAW / STOP / CLEAR / DELETE / TOOLBAR)
[x] Multi-stroke support (draw multiple shapes)
[x] Color picker (15 colors + custom)
[x] Brush size selector (5 sizes)
[x] Undo / Redo
[x] Clear canvas
[x] Save drawing to backend

AI Shape Recognition
[x] Real-time shape detection (Circle, Square, Triangle, Rectangle, Line)
[x] Shakiness detection — detects wobbly strokes
[x] Lenient classification — relaxed thresholds for shaky hands
[x] Robust circle fit — median radius (outlier-resistant)
[x] PCA-based orientation — squares/triangles/rectangles rotate to match stroke angle
[x] Lowered thresholds — 5 points minimum (was 10)
[x] Unclosed shape fallback — detects circles/squares even if not perfectly closed
[x] Shape palette (Auto / Circle / Square / Triangle / Rectangle / Line)
[x] Live preview ghost outline while drawing
[x] Green glow on corrected shapes
[x] Completion percentage while drawing
[x] Debug mode — raw stroke overlay in red
[x] FPS meter — top-right, color-coded

UI/UX
[x] Dark / Light theme toggle
[x] Sidebar with gesture guide
[x] Sidebar with current settings display
[x] Sidebar with detected shape display
[x] Sidebar with tips
[x] Topbar with gesture status indicator
[x] Topbar with shape palette buttons
[x] Floating toolbar (right side)

Backend
[x] API integration (save / get / delete drawings)
[x] Backend sync

Smart Features
[x] Smart Connect — auto-connect nearby endpoints
[x] Shape selection (hover to select)
[x] Move selected shape
[x] Delete selected shape

ML/AI
[x] TensorFlow.js neural network model (RealShapeAI.js)
[x] 28-feature extraction
[x] Synthetic training data generation with air-drawing noise
[x] Training data with tremor, drift, jumps, overshoot
```

## Repository
https://github.com/Parth-4518/Blockscan_website
