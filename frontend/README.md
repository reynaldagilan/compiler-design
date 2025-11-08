# Frontend - Compiler Parser UI

This is the frontend component of the Compiler Design project focused on Error Detection & Recovery in Parsing.

## Overview

The frontend provides an interactive user interface for visualizing and testing compiler parsing with error detection and recovery mechanisms.

## Files

### `index.html`
- Main HTML file for the parser UI
- Contains semantic structure with sections for:
  - Input code textarea
  - Parse button
  - Results display area
  - Error display area

### `styles.css`
- Comprehensive styling with dark theme (GitHub-like)
- Responsive design for mobile and desktop
- Includes:
  - Global styles and typography
  - Header styling with gradient background
  - Grid-based layout
  - Form elements styling (textarea, buttons)
  - Dark mode color scheme
  - Media queries for responsive behavior

### `script.js`
- Frontend JavaScript application logic
- Features:
  - DOM element management
  - Event listeners for user interactions
  - API communication with backend parser
  - Results and error display handling
  - Async/await for fetch operations
  - Error handling and user feedback

## Features

1. **Code Input**: Users can paste or write code in the textarea
2. **Parse Button**: Triggers parsing via backend API
3. **Results Display**: Shows Abstract Syntax Tree (AST) when parsing succeeds
4. **Error Display**: Shows detailed error messages with line and column information
5. **Error Recovery**: Displays error recovery strategies
6. **Responsive Design**: Works on desktop and mobile devices

## Backend Integration

The frontend communicates with the backend parser at:
- **API Endpoint**: `../backend/api/parse`
- **Method**: POST
- **Request**: JSON with `code` property
- **Response**: JSON with `ast` and `errors` properties

## Usage

1. Open `index.html` in a web browser
2. Enter code in the input area
3. Click "Parse Code" button
4. View results or errors in the display areas

## Styling

- **Color Scheme**: Dark mode (GitHub-inspired)
- **Accent Color**: Blue (#1f6feb)
- **Error Color**: Red (#f85149)
- **Background**: Dark gray (#0d1117, #161b22)

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- Vanilla JavaScript (ES6+)
- Fetch API for backend communication

## Future Enhancements

- Syntax highlighting for code input
- Line numbers in code editor
- Token visualization
- Parse tree visualization
- Support for multiple programming languages
- Code examples gallery
