// Стрелка на выпадающем списке выбора города
function arrowMenu() {
  const select = document.querySelector('.dropbtnCity')
  const arrowValue = document.querySelector('.rectangle')
  const linka = document.querySelector('.a')
  const linkb = document.querySelector('.b')
  const linkc = document.querySelector('.c')
  const linkd = document.querySelector('.d')
  select.addEventListener('click', arrow)
  function arrow() {
    arrowValue.style.transform = arrowValue.style.transform == "rotate(0deg)" ? "rotate(-180deg)" :      "rotate(0deg)"
    arrowValue.classList.add('transition_arrow')
  }
  arrow()
  linka.addEventListener('click', arrow)
  linkb.addEventListener('click', arrow)
  linkc.addEventListener('click', arrow)
  linkd.addEventListener('click', arrow)
}
arrowMenu()

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
  const a = document.querySelector('.a')
  const b = document.querySelector('.b')
  const c = document.querySelector('.c')
  const d = document.querySelector('.d')
  let links = [a, b, c, d]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdown a')) {
    myDropdown.classList.remove('show')
    document.querySelector('.dropbtn').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_one')
  const b = document.querySelector('.b_one')
  const c = document.querySelector('.c_one')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownMenuTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("show2");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownTwo a')) {
    myDropdownTwo.classList.remove('show2')
    document.querySelector('.dropbtn2').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_two')
  const b = document.querySelector('.b_two')
  const c = document.querySelector('.c_two')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownMenuThree() {
  document.getElementById("myDropdownThree").classList.toggle("show3");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownThree a')) {
    myDropdownThree.classList.remove('show3')
    document.querySelector('.dropbtn3').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_three')
  const b = document.querySelector('.b_three')
  const c = document.querySelector('.c_three')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownMenuFour() {
  document.getElementById("myDropdownFour").classList.toggle("show4");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownFour a')) {
    myDropdownFour.classList.remove('show4')
    document.querySelector('.dropbtn4').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_four')
  const b = document.querySelector('.b_four')
  const c = document.querySelector('.c_four')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownSize() {
  document.getElementById("myDropdownSize").classList.toggle("show5");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSize a')) {
    myDropdownSize.classList.remove('show5')
    document.querySelector('.dropbtn5').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_s_one')
  const b = document.querySelector('.b_s_one')
  const c = document.querySelector('.c_s_one')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownSizeTwo() {
  document.getElementById("myDropdownSizeTwo").classList.toggle("show6");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSizeTwo a')) {
    myDropdownSizeTwo.classList.remove('show6')
    document.querySelector('.dropbtn6').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_s_two')
  const b = document.querySelector('.b_s_two')
  const c = document.querySelector('.c_s_two')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownSizeThree() {
  document.getElementById("myDropdownSizeThree").classList.toggle("show7");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSizeThree a')) {
    myDropdownSizeThree.classList.remove('show7')
    document.querySelector('.dropbtn7').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_s_three')
  const b = document.querySelector('.b_s_three')
  const c = document.querySelector('.c_s_three')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
})

function dropdownSizeFour() {
  document.getElementById("myDropdownSizeFour").classList.toggle("show8");
}
window.addEventListener('click', function(event) {
  if (event.target.matches('#myDropdownSizeFour a')) {
    myDropdownSizeFour.classList.remove('show8')
    document.querySelector('.dropbtn8').innerText = event.target.innerText
  }
  const a = document.querySelector('.a_s_four')
  const b = document.querySelector('.b_s_four')
  const c = document.querySelector('.c_s_four')
  let links = [a, b, c]
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(a => a.classList.remove('checked'))
      link.classList.add('checked')
    })
  })
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