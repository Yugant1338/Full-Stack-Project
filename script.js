const buttons = document.querySelectorAll('.faqinside');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const slide = this.nextElementSibling;
        slide.classList.toggle('active');
    });
});