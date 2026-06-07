import './style.css';

const button = document.getElementById('btn');
const counter = document.getElementById('counter');
let count = 0;

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

console.log('Webpack проект успешно загружен!');