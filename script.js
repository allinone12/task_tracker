const button = document.querySelector('button');
const list = document.getElementById('list');
const remove = document.getElementById('remove-all');
const closeTask = document.getElementById('close');

button.addEventListener('click', () => {
  let task = document.querySelector('.input').value;
  const closeBtn = closeTask.cloneNode(true);
  const newItem = document.createElement('li');
  newItem.classList.add('output-list-item');
  closeBtn.onclick = () => {
    newItem.remove();
  }
  if(task === "") {
    return false;
  } else {
    newItem.innerText = task;
    newItem.appendChild(closeBtn);
    closeBtn.style.display = 'block';
  }
  list.insertBefore(newItem, list.firstChild);
  document.querySelector('.input').value = '';  
});

remove.addEventListener('click', () => {
  list.innerHTML = '';
});

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      btn();
    }
  });
