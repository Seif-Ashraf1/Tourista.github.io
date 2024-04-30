function searchFunction() {
    // Get input value and convert to lowercase for case-insensitive search
    var input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get the list items to search through
    var list = document.querySelectorAll();
    
    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < list.length; i++) {
    var text = list[i].textContent.toLowerCase();
    if (text.includes(input)) {
        list[i].style.display = '';
    } else {
        list[i].style.display = 'none';
    }
    }
}
