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
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        btn.style.display = (window.pageYOffset > 300) ? "block" : "none";
    });
    
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Инициализация при полной загрузке
window.addEventListener('load', initBackToTop);
// И при изменении DOM (для SPA)
document.addEventListener('DOMContentLoaded', initBackToTop);
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const rows = document.querySelectorAll('.comparison-row');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Видаляємо клас .active з усіх кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Додаємо клас .active до натиснутої кнопки
            button.classList.add('active');

            // Отримуємо значення фільтра
            const filter = button.getAttribute('data-filter');

            // Фільтруємо рядки
            rows.forEach(row => {
                const category = row.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
});

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

