window.onload = function() {
    window.scrollTo(0, 0);
};

document.querySelector('.next-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});