const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

/*=============== MOSTRAR MENU ===============*/
// validando se a const existir
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}

/*=============== ESCONDER MENU ===============*/
// validando se a const existir
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== ESCONDER MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction(){
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== HEADER MUDAR COR DE FUNDO ===============*/
function scrollHeader() {
  const header = document.getElementById("header")

  if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll",scrollHeader)

/*=============== ROLAGEM DOS DEPOIMENTOS ===============*/
var swiper = new Swiper(".testimonial-wrapper", {
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== CUSTOMIZAÇÃO DE TEMA/DISPLAY ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");

// abrir modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
// fechar modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

theme.addEventListener("click", openThemeModal)
themeModal.addEventListener("click", closeThemeModal);

/*=============== FONTES ===============*/
// remover a class active dos spans ou dos seletores de tamanho de fonte
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}
fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')) {
      fontSize = '12px';
    }
    else if(size.classList.contains('font-size-2')) {
      fontSize = '14px';
    }
    else if(size.classList.contains('font-size-3')) {
      fontSize = '16px';
    }
    else if(size.classList.contains('font-size-4')) {
      fontSize = '18px';
    }
    // mundando o tamanho da font no root do elemento HTML
    document.querySelector('html').style.fontSize = fontSize;
  })
})

/*=============== CORES ===============*/
//remover a class active das cores
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();

    if(color.classList.contains('color-1'))
    {
      primaryHue = 189;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue = 239;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue = 274;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue = 303;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue = 110;
    }
    color.classList.add("active")
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})