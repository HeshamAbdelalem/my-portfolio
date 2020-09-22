let colorNums = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];
const button = document.querySelector('.box__button button');
const colorhex = document.querySelector('.box__color .box__color__hex');
document.body.style.backgroundColor = '#ffffff';
colorhex.textContent = '#ffffff';
let hexColor;

function printColor() {
  hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += colorNums[randomNumber()];
  }
  colorhex.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function randomNumber() {
  return Math.floor(Math.random() * colorNums.length);
}

button.addEventListener('click', () => {
  hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += colorNums[randomNumber()];
  }
  colorhex.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
