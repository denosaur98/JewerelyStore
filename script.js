// Стрелка на выпадающем списке выбора города
const onOutsideClick = event => {
  const getId = event?.target?.id == 'selectId'
  const arrowValue = document.querySelector('.rectangle')
  if (!getId) {
    arrowValue.style.transform = arrowValue.style.transform == "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)"
    arrowValue.classList.add('transition_arrow')
  }
}
document.addEventListener('click', onOutsideClick)

// Одна и та же функция на 3 блока с кнопками

// Кнопки под заголовком Распродажа
let btnContainer = document.getElementById("myBtns")
let btns = btnContainer.getElementsByClassName("btn")
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("active", "")
    this.className += " active"
  })
}

// Кнопки под заголовком Кольцо из золота с бриллиантами
let btnSizeBox = document.getElementById("myBox")
let btnsSize = btnSizeBox.getElementsByClassName("box")
for (let b = 0; b < btnsSize.length; b++) {
  btnsSize[b].addEventListener("click", function() {
    let current = document.getElementsByClassName("boxact")
    current[0].className = current[0].className.replace("boxact", "")
    this.className += " boxact"
  })
}

//Точки под кольцами в разделе Распродажа
let radioContainer = document.getElementById("radioBlock")
let radio = radioContainer.getElementsByClassName("radio")
for (let c = 0; c < radio.length; c++) {
  radio[c].addEventListener("click", function() {
    let current = document.getElementsByClassName("radio_active")
    current[0].className = current[0].className.replace("radio_active", "")
    this.className += " radio_active"
  })
}

let radioContainerTwo = document.getElementById("radioBlockTwo")
let radioTwo = radioContainerTwo.getElementsByClassName("radio_frame2")
for (let d = 0; d < radioTwo.length; d++) {
  radioTwo[d].addEventListener("click", function() {
    let current = document.getElementsByClassName("radio_frame2_active")
    current[0].className = current[0].className.replace("radio_frame2_active", "")
    this.className += " radio_frame2_active"
  })
}

let radioContainerThree = document.getElementById("radioBlockThree")
let radioThree = radioContainerThree.getElementsByClassName("radio_frame3")
for (let e = 0; e < radioThree.length; e++) {
  radioThree[e].addEventListener("click", function() {
    let current = document.getElementsByClassName("radio_frame3_active")
    current[0].className = current[0].className.replace("radio_frame3_active", "")
    this.className += " radio_frame3_active"
  })
}

let radioContainerFour = document.getElementById("radioBlockFour")
let radioFour = radioContainerFour.getElementsByClassName("radio_frame4")
for (let f = 0; f < radioFour.length; f++) {
  radioFour[f].addEventListener("click", function() {
    let current = document.getElementsByClassName("radio_frame4_active")
    current[0].className = current[0].className.replace("radio_frame4_active", "")
    this.className += " radio_frame4_active"
  })
}

// Одна и та же функция на 4 блока с выпадающим списком
function dropdownCity() {
  document.getElementById("myDropdownCity").classList.toggle("showCity");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownCity a')) {
    myDropdownCity.classList.remove('showCity')
    document.querySelector('.dropbtnCity').innerText = event.target.innerText
  }
})

function dropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdown a')) {
    myDropdown.classList.remove('show')
    document.querySelector('.dropbtn').innerText = event.target.innerText
  }
})

function dropdownMenuTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("show2");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownTwo a')) {
    myDropdownTwo.classList.remove('show2')
    document.querySelector('.dropbtn2').innerText = event.target.innerText
  }
})

function dropdownMenuThree() {
  document.getElementById("myDropdownThree").classList.toggle("show3");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownThree a')) {
    myDropdownThree.classList.remove('show3')
    document.querySelector('.dropbtn3').innerText = event.target.innerText
  }
})

function dropdownMenuFour() {
  document.getElementById("myDropdownFour").classList.toggle("show4");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownFour a')) {
    myDropdownFour.classList.remove('show4')
    document.querySelector('.dropbtn4').innerText = event.target.innerText
  }
})

function dropdownSize() {
  document.getElementById("myDropdownSize").classList.toggle("show5");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSize a')) {
    myDropdownSize.classList.remove('show5')
    document.querySelector('.dropbtn5').innerText = event.target.innerText
  }
})

function dropdownSizeTwo() {
  document.getElementById("myDropdownSizeTwo").classList.toggle("show6");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSizeTwo a')) {
    myDropdownSizeTwo.classList.remove('show6')
    document.querySelector('.dropbtn6').innerText = event.target.innerText
  }
})

function dropdownSizeThree() {
  document.getElementById("myDropdownSizeThree").classList.toggle("show7");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSizeThree a')) {
    myDropdownSizeThree.classList.remove('show7')
    document.querySelector('.dropbtn7').innerText = event.target.innerText
  }
})

function dropdownSizeFour() {
  document.getElementById("myDropdownSizeFour").classList.toggle("show8");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSizeFour a')) {
    myDropdownSizeFour.classList.remove('show8')
    document.querySelector('.dropbtn8').innerText = event.target.innerText
  }
})

// Открывает/закрывает инфу при клике на знак вопроса после заголовка Кольцо из золота с бриллиантами
const element = document.querySelector(".info");
element.style.background = '#FFFFFF';
element.style.height = '80px';
element.style.width = '261px';
element.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.1)';
element.style.fontFamily = 'Inter';
element.style.fontWeight = '400';
element.style.fontSize = '14px';
element.style.lineHeight = '140%';
element.style.marginTop = '-120px';
element.style.padding = '20px';
const button = document.querySelector(".question");
button.addEventListener("click",() => {
  element.classList.toggle("info");
})