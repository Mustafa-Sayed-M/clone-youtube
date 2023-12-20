// Get Elements:
// Header:
const headerElements = {
    searchForm: document.querySelector('header .search-form'),
    searchFormInput: document.querySelector('header .search-form input'),
    startBox: document.querySelector('header .start-box'),
    endBox: document.querySelector('header .end-box'),
};

// Floating Sidebar:
const floatingSidebar = document.querySelector('.page .floating-aside');

// Function to toggle Search Form
function toggleSearchForm() {
    headerElements.startBox.classList.toggle('hide');
    headerElements.searchForm.classList.toggle('active');
    headerElements.endBox.classList.toggle('hide');
    headerElements.searchFormInput.focus();
}

// Function to toggle Floating Sidebar
function toggleFloatingSidebar() {
    floatingSidebar.classList.toggle('active');
}