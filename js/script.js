document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const menu = button.nextElementSibling;
    menu.classList.toggle('active');
  });
});