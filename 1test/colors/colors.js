document.addEventListener('DOMContentLoaded', function () {
  // Change font color to red
  document.querySelector('#red').onclick = function () {
    document.querySelector('#hello').style.color = 'red';
  };

  document.querySelector('#blue').onclick = function () {
    document.querySelector('#hello').style.color = 'blue';
  };

  document.querySelector('#green').onclick = function () {
    document.querySelector('#hello').style.color = 'green';
  };
});
