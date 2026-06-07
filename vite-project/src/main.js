import './style.css';

const button = document.getElementById('counter');
const display = document.getElementById('count-display');
let count = 0;

button.addEventListener('click', () => {
  count++;
  display.textContent = count;
  console.log(`Vite счетчик: ${count}`);
});

console.log('Vite проект успешно загружен!');