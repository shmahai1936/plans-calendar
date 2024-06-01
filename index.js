const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    inputField.value = '';
    toDoContainer.appendChild(item);
    item.classList.add('toDoAdded')

    item.addEventListener('click', () => {
        item.classList.add('toDoCompleted');
    })
    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })

})