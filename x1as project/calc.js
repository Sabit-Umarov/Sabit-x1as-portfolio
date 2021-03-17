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

let firstPlace = document.querySelector('.output-numbs')
let first = firstPlace.innerHTML
let resultPlace = document.querySelector('.input-numbs')
let result = resultPlace.innerHTML

function createNumber(numb) {
    return function () {
        if (resultPlace.innerHTML.length === 1 && resultPlace.innerHTML === '0') {
            resultPlace.innerHTML = numb;
        }
        else if (resultPlace.innerHTML.length < 17) {
            resultPlace.innerHTML = resultPlace.innerHTML + numb; 
        }
        result = parseFloat(resultPlace.innerHTML)
    }
}

function del() {
    if (resultPlace.innerHTML.length > 1) {
        resultPlace.innerHTML = resultPlace.innerHTML.slice(0,resultPlace.innerHTML.length -1)
    }
    else if (resultPlace.innerHTML.length === 1){
        resultPlace.innerHTML = 0;
    }
}

function plus() {
    firstPlace.innerHTML = resultPlace.innerHTML + " +";
    resultPlace.innerHTML = 0;
}

function minus() {
    firstPlace.innerHTML = resultPlace.innerHTML + " -";
    resultPlace.innerHTML = 0;
}

function multiply() {
    firstPlace.innerHTML = resultPlace.innerHTML + " *";
    resultPlace.innerHTML = 0;
}

function division() {
    firstPlace.innerHTML = resultPlace.innerHTML + " /";
    resultPlace.innerHTML = 0;
}

function equal () {
    if (firstPlace.innerHTML[firstPlace.innerHTML.length - 1] === '+') {
        firstPlace.innerHTML = firstPlace.innerHTML.slice(0,firstPlace.innerHTML.length - 2)
        resultPlace.innerHTML = +firstPlace.innerHTML + +resultPlace.innerHTML
    }
    else if (firstPlace.innerHTML[firstPlace.innerHTML.length - 1] === '-') {
        firstPlace.innerHTML = firstPlace.innerHTML.slice(0,firstPlace.innerHTML.length - 2)
        resultPlace.innerHTML = +firstPlace.innerHTML - +resultPlace.innerHTML
    }
    else if (firstPlace.innerHTML[firstPlace.innerHTML.length - 1] === '*') {
        firstPlace.innerHTML = firstPlace.innerHTML.slice(0,firstPlace.innerHTML.length - 2)
        resultPlace.innerHTML = +firstPlace.innerHTML * +resultPlace.innerHTML
    }
    else if (firstPlace.innerHTML[firstPlace.innerHTML.length - 1] === '/') {
        firstPlace.innerHTML = firstPlace.innerHTML.slice(0,firstPlace.innerHTML.length - 2)
        resultPlace.innerHTML = +firstPlace.innerHTML / +resultPlace.innerHTML
    }
}

function C() {
    resultPlace.innerHTML = 0;
}

function AC() {
    resultPlace.innerHTML = 0;
    firstPlace.innerHTML = 0;
}