const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value != '') {
        let addedChapter = document.createElement('li');
        let deleteButton = document.createElement('button');

        addedChapter.innerHTML = input.value;
        input.value = '';
        deleteButton.innerHTML = "❌";

        addedChapter.appendChild(deleteButton);

        list.appendChild(addedChapter);
        
        deleteButton.addEventListener('click', function() {
            list.removeChild(addedChapter);
        });

        input.focus();
    }
});