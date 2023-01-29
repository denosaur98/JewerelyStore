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

// Одна и та же функция на 4 блока с выпадающим списком в разделе Распродажа
function dropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownMenuTwo() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownMenuThree() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownMenuFour() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function dropdownSize() {
  document.getElementById("myDropdownSize").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownSize2() {
  document.getElementById("myDropdownSize2").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownSize3() {
  document.getElementById("myDropdownSize3").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownSize4() {
  document.getElementById("myDropdownSize4").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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