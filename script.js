// Стрелка на меню выбора города
const onOutsideClick = event => {
  const getId = event?.target?.id == 'selectId'
  const arrowValue = document.querySelector('.rectangle')
  if (!getId) {
    arrowValue.style.transform = arrowValue.style.transform == "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)"
    arrowValue.classList.add('transition_arrow')
  }
}
document.addEventListener('click', onOutsideClick)

// Одна и та же функция на 2 блока с кнопками
let btnContainer = document.getElementById("myBtns")
let btns = btnContainer.getElementsByClassName("btn")
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("active", "")
    this.className += " active"
  })
}

let btnSizeBox = document.getElementById("myBox")
let btnsSize = btnSizeBox.getElementsByClassName("box")
for (let b = 0; b < btnsSize.length; b++) {
  btnsSize[b].addEventListener("click", function() {
    let current = document.getElementsByClassName("boxact")
    current[0].className = current[0].className.replace("boxact", "")
    this.className += " boxact"
  })
}


// Одна и та же функция на 4 блока с выпадающим меню
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