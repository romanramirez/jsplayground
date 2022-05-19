let counter = 0;

function count() {
  counter++;
  document.querySelector('h1').innerHTML = counter;
  if (counter > 0 && counter % 10 == 0) {
    alert(`The counter is now ${counter}`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').onclick = count;
});
