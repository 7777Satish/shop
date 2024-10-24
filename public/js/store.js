const scrollContainer = document.getElementById('scroll_container');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const cards = scrollContainer.querySelectorAll('.card');

// Scroll step is the number of visible elements
let scrollStep = calculateVisibleElements();

scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollStep, // Scroll left by the number of visible elements
        behavior: 'smooth'
    });
    // updateButtonStates();
});

scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollStep, // Scroll right by the number of visible elements
        behavior: 'smooth'
    });
    // updateButtonStates();
});
scrollContainer.onscrollend=updateButtonStates;
function calculateVisibleElements() {
    // Get the width of the scroll container and a single card
    const containerWidth = scrollContainer.clientWidth;
    const cardWidth = cards[0].clientWidth;
    
    // Calculate how many cards fit in the visible container area
    return Math.floor(containerWidth / cardWidth) * cardWidth;
}

function updateButtonStates() {
    // Disable the left button when scrolled to the start
    scrollLeftBtn.disabled = scrollContainer.scrollLeft <= 10;
    
    // Disable the right button when scrolled to the end (account for gaps and ensure floating-point issues don't interfere)
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const tolerance = 1; // A small tolerance to handle floating point inaccuracies
    scrollRightBtn.disabled = scrollContainer.scrollLeft >= maxScrollLeft - tolerance;

}

// Update scroll step on window resize
window.addEventListener('resize', () => {
    scrollStep = calculateVisibleElements();
    updateButtonStates();
});

// Initially update button states
updateButtonStates();
