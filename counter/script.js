const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const count = document.querySelector('.counter__status h2');
let countNum = parseInt(count.textContent);
countNum = 0;

increaseBtn.addEventListener('click', () => {
  countNum = countNum + 1;
  count.textContent = countNum;
  navigator.vibrate(25);
});

decreaseBtn.addEventListener('click', () => {
  countNum = countNum - 1;
  count.textContent = countNum;
  navigator.vibrate(25);
});

resetBtn.addEventListener('click', () => {
  countNum = 0;
  count.textContent = countNum;
  navigator.vibrate(300);
});
