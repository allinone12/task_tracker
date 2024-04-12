const button = document.querySelector('button');
const list = document.getElementById('list');

function btn() {
  let task = document.querySelector('.input').value;
  const newItem = document.createElement('li');
  newItem.classList.add('output-list-item');
  newItem.innerText = task;
  list.insertBefore(newItem, list.firstChild);
  document.querySelector('.input').value = '';
}

button.addEventListener('click', btn);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      btn();
    }
  });