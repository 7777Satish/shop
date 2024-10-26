var a = 0;
// Run this code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the class 'scroll_container' and iterate over them
    document.querySelectorAll('.scroll_container').forEach((scrollContainer) => {
        const scrollLeftBtn = scrollContainer.parentElement.querySelector('.scroll-left');
        const scrollRightBtn = scrollContainer.parentElement.querySelector('.scroll-right');
        const cards = scrollContainer.querySelectorAll('.card');
        
        // Check if both buttons and the container exist
        if (!scrollLeftBtn || !scrollRightBtn || !scrollContainer) {
            console.warn('One or more required elements are missing:', scrollContainer, scrollLeftBtn, scrollRightBtn);
            return; // Skip this iteration if any element is missing
        }
        // Scroll step is the number of visible elements
        let scrollStep = calculateVisibleElements();
        
        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.children[0].scrollBy({
                left: -scrollStep, // Scroll left by the number of visible elements
                behavior: 'smooth'
            });
            updateButtonStates();
        });

        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.children[0].scrollBy({
                left: scrollStep, // Scroll right by the number of visible elements
                behavior: 'smooth'
            });
            updateButtonStates();
        });

        scrollContainer.children[0].onscroll = updateButtonStates;

        function calculateVisibleElements() {
            // Get the width of the scroll container and a single card
            const containerWidth = scrollContainer.clientWidth;
            const cardWidth = cards[0]?.clientWidth || 0; // Add optional chaining to avoid errors
            
            // Calculate how many cards fit in the visible container area
            return Math.floor(containerWidth / cardWidth) * cardWidth;
        }

        function updateButtonStates() {
            // Disable the left button when scrolled to the start
            scrollLeftBtn.disabled = scrollContainer.children[0].scrollLeft <= cards.length;
            
            // Disable the right button when scrolled to the end (account for gaps and ensure floating-point issues don't interfere)
            const maxScrollLeft = scrollContainer.children[0].scrollWidth - scrollContainer.clientWidth;
            const tolerance = 1; // A small tolerance to handle floating point inaccuracies
            scrollRightBtn.disabled = scrollContainer.children[0].scrollLeft >= maxScrollLeft - tolerance;
        }

        // Update scroll step on window resize
        window.addEventListener('resize', () => {
            scrollStep = calculateVisibleElements();
            updateButtonStates();
        });

        // Initially update button states
        updateButtonStates();
    });
});
