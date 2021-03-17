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

let sliderPictures = document.querySelectorAll(".slider img")
let counter = 0;
function nextPicture() {
    sliderPictures[counter++].style.opacity = '0';
    if (counter > sliderPictures.length - 1) {
        counter = 0;
    }
    sliderPictures[counter].style.opacity = '1'
}

function prevPicture() {
    sliderPictures[counter--].style.opacity = '0';
    if (counter < 0) {
        counter = sliderPictures.length - 1;
    }
    sliderPictures[counter].style.opacity = '1';
}

let count = 0;
let containerAdress = document.getElementById('third-part-container')
let conainerImageAdress = document.getElementsByClassName('third-part-image')[0]
let blocks = document.getElementsByClassName('third-part-container-adding-block')
let parentDoc = document.querySelector('.third-part')

function addBlock() {
    let div = document.createElement('div')
    div.className = ('third-part-container-adding-block')
    count += 1;
    if(count < 25) {
        containerAdress.append(div)
    }
    else if (count === 25) {
      for(var i = 0; i < blocks.length; i++){
        blocks[i].style.display = 'none'
      }
      conainerImageAdress.style.display = 'block'
      containerAdress.style.borderRadius = '15%'
      document.getElementsByClassName('third-part-container-adding-block-button')[0].innerHTML = "Hey, what's up?"
      conainerImageAdress.style.animation = 'anim 0.5s'
      setTimeout(() => {
        conainerImageAdress.style.animation = 'quit 1s'
        parentDoc.style.animation = 'quit 1s'
      },3000)
      setTimeout(() => {
        conainerImageAdress.style.display = 'none'
        parentDoc.style.display = 'none'
      },4000)
    }
}
let secondPart = document.querySelector('.second-part')
let blackWhite = false;
window.addEventListener('scroll', function(e) {
    let whereWe = window.scrollY;
    if(whereWe > 600 && blackWhite === false) {
        secondPart.style.opacity = '1'
        blackWhite = true
        document.body.style.background = 'linear-gradient(90deg, black, white)'
        document.body.style.backgroundSize = '150% 150%'
    }
    else if (whereWe < 600 && blackWhite === true) {
        secondPart.style.opacity = '0'
        blackWhite = false;
        document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
        document.body.style.backgroundSize = '2500% 2500%'
    }
})