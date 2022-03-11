var oModal = document.querySelector('.modal')
var modalImg = document.querySelector('.m-img')

function openImg(a) {
  oModal.style.bottom = '0'
  modalImg.src = a
  pickNav.classList.remove('show')
}
function closeModal() {
  oModal.style.bottom = '-100%'
}

// ================================

var pickNav = document.querySelector('.nav')
var btnAbrir = document.querySelector('.btn-open')
var pickBtns = document.querySelectorAll('.btns')

for (const links of pickBtns) {
  links.addEventListener('click', function () {
    pickNav.classList.toggle('show')
  })
}
// ================================

var pickLinks = document.querySelectorAll('.a-btn')

for (const alla of pickLinks) {
  alla.addEventListener('click', function () {
    pickNav.classList.remove('show')
  })
}
// CLEAR MENU
var clearAll = document.querySelectorAll('.clearMenu')

for (const clear of clearAll) {
  clear.addEventListener('click', function () {
    pickNav.classList.remove('show')
  })
}
