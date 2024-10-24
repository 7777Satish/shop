const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
const nextBtns = Array.from(document.querySelectorAll('.next-btn'));
const prevBtns = Array.from(document.querySelectorAll('.prev-btn'));

collapsibleHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {

        collapsibleHeaders.forEach((h)=>{
            h.parentElement.classList.remove('active');
        })

        // Toggle collapsible section
        const collapsible = header.parentElement;
        collapsible.classList.toggle('active');
    });
});

nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const currentStep = document.getElementById(`step-${index + 1}`);
        const nextStep = document.getElementById(`step-${index + 2}`);

        // Collapse current and expand the next section
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    });
});

prevBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const currentStep = document.getElementById(`step-${index + 2}`);
        const prevStep = document.getElementById(`step-${index + 1}`);

        // Collapse current and expand the previous section
        currentStep.classList.remove('active');
        prevStep.classList.add('active');
    });
});
