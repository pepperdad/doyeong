const greet2 = document.querySelector('.greet2');
const greet3 = document.querySelector('.greet3');
const intro = document.querySelector('.introduce');

setTimeout(change, 1000);
setTimeout(change2, 1800);
setTimeout(change3, 3000);

function change() {
  greet2.classList.add('fade-in');
  greet2.classList.remove('hidden');
}

function change2() {
  greet3.classList.add('fade-in');
  greet3.classList.remove('hidden');
}

function change3() {
  intro.classList.add('fade-in');
  intro.classList.remove('hidden');
}
