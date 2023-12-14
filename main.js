const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close-button');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
