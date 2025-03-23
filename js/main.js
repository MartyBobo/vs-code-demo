// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    const appDiv = document.getElementById('app');
    
    // Create elements
    const header = document.createElement('h2');
    header.textContent = 'Project Files';
    
    const fileList = document.createElement('ul');
    
    // Sample file structure
    const files = [
        'index.html',
        'css/styles.css',
        'js/main.js',
        'README.md'
    ];
    
    // Create list items
    files.forEach(file => {
        const item = document.createElement('li');
        item.textContent = file;
        fileList.appendChild(item);
    });
    
    // Add to DOM
    appDiv.appendChild(header);
    appDiv.appendChild(fileList);
});