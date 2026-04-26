unction searchText() {
    let query = document.getElementById('page-search-input').value;
    if (query) {
        window.find(query);
    } else {
        alert("Enter search term");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let toggleBtn = document.getElementById('contrast-toggle');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
    }
});