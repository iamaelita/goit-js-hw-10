const checkboxRef = document.querySelector('#theme-switch-toggle'); // Ссылка на чекбокс

// Константы тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme'); // Сохраненная в local storage тема
const isChecked = JSON.parse(localStorage.getItem('isCheckboxChecked')); // Сохраненный буль чекбокса

// Тема при загрузке страницы
savedTheme
  ? document.body.classList.add(savedTheme)
  : document.body.classList.add(Theme.LIGHT);

checkboxRef.checked = isChecked; // Положение чекбокса при загрузке страницы

// Смена темы при клике на чекбокс
function onCheckboxClick() {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);

  setTheme();
}

// Установка и сохранение темы в local storage
function setTheme() {
  localStorage.setItem('isCheckboxChecked', event.target.checked);

  if (document.body.classList.contains(Theme.LIGHT)) {
    saveTheme(Theme.LIGHT);
  }

  if (document.body.classList.contains(Theme.DARK)) {
    saveTheme(Theme.DARK);
  }
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

// Слушатель клика на чекбокс
checkboxRef.addEventListener('click', onCheckboxClick);
