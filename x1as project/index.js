let tab = document.querySelector('.nav')
function openTab () {
    if (tab.style.display === 'flex') {
        tab.style.animation = 'closing 0.5s'
        setTimeout(() => {
            tab.style.display = 'none'
        }, 400) 
    }
    else {
        tab.style.display = 'flex'
        tab.style.animation = 'opening 1s'
    } 
}

const listPlace = document.getElementsByClassName("todo-list-of-things")[0];
function thingsAdd() {
    let input = document.getElementById("todo-inputed-string")
    let x = input.value;
    if (x != '') {
        let li = document.createElement('li');
        li.className = ('todo-thing');
        li.onclick = function() {selectedLi(this)};
        li.innerHTML = x;
        listPlace.append(li);
        input.value = '';   
    }
    else {
        alert('You need to type something!')
    } 
}

let selectedList = [];
function selectedLi (selected) {
    let current = selected;
    
    if(selectedList.indexOf(selected) != -1) {
        selectedList = selectedList.filter((elem) => elem != selected);
        selected.style.background = ("white");
        selected.style.textDecoration = ('none');
    }
    else {
        selectedList.push(current);
        selected.style.background = ("rgba(180, 180, 180, 0.5)");
        selected.style.textDecoration = ('line-through');
    }
}

function deleteChosed () {
    selectedList.map((el) => {
        el.remove()
    });    
}
