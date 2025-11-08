// Frontend JavaScript for Compiler Parser UI

// DOM Elements
const codeInput = document.getElementById('codeInput');
const parseBtn = document.getElementById('parseBtn');
const resultsDiv = document.getElementById('results');
const errorsDiv = document.getElementById('errors');

// Event Listeners
parseBtn.addEventListener('click', handleParse);

// Handle Parse Button Click
function handleParse() {
  const code = codeInput.value.trim();
  
  if (!code) {
    resultsDiv.innerHTML = '<p style="color: #f85149;">Please enter some code to parse.</p>';
    return;
  }
  
  // Clear previous results
  resultsDiv.innerHTML = '<p>Parsing...</p>';
  errorsDiv.innerHTML = '';
  
  // Call backend parser
  parseCode(code);
}

// Send code to backend parser
async function parseCode(code) {
  try {
    // This would connect to the backend API
    const response = await fetch('../backend/api/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: code })
    });
    
    if (!response.ok) {
      throw new Error('Failed to parse code');
    }
    
    const result = await response.json();
    displayResults(result);
  } catch (error) {
    displayError('Backend Error', error.message);
  }
}

// Display Parse Results
function displayResults(result) {
  if (result.errors && result.errors.length > 0) {
    displayErrors(result.errors);
  }
  
  if (result.ast) {
    resultsDiv.innerHTML = `
      <h3>Abstract Syntax Tree (AST)</h3>
      <pre>${JSON.stringify(result.ast, null, 2)}</pre>
    `;
  } else {
    resultsDiv.innerHTML = '<p style="color: #79c0ff;">Parse completed successfully.</p>';
  }
}

// Display Errors
function displayErrors(errors) {
  let errorHTML = '<h3 style="color: #f85149;">Errors Found:</h3><ul>';
  
  errors.forEach((error, index) => {
    errorHTML += `
      <li>
        <strong>Error ${index + 1}:</strong> ${error.message}<br>
        <small>Line: ${error.line}, Column: ${error.column}</small>
      </li>
    `;
  });
  
  errorHTML += '</ul>';
  errorsDiv.innerHTML = errorHTML;
}

// Display Single Error
function displayError(title, message) {
  errorsDiv.innerHTML = `
    <h3 style="color: #f85149;">${title}</h3>
    <p>${message}</p>
  `;
}

// Utility function for token highlighting
function highlightTokens(code) {
  // This would implement syntax highlighting
  return code;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Compiler Parser UI Loaded');
  codeInput.focus();
});

console.log('Parser frontend script initialized');
