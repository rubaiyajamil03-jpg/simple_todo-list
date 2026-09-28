function addButton() {
    let user = document.querySelector('.Title');
    let result = user.value;

    if(result === ''){
        alert(`Type something first`);
        return;
    }
    
    document.querySelector('.display').innerHTML += '<div class="task">'
     + '<input type="checkbox" onclick = "check(this)" class="check">'
     + '<span>' + result + '</span>'
     + '<button class="remove" onclick="delButton(this)">Delete</button>' 
     + '</div>';
    user.value = '';
}

function enterKey(event) {
    if (event.key === 'Enter') {
       addButton();
    }
}

function delButton(button) {
    button.parentElement.remove();
}

function check(checkbox) {
    let task = checkbox.parentElement.children[1];

    if (checkbox.checked) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
}