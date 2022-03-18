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
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

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

/*=============== BACKGROUND DO TEMA ===============*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//mudar a cor de fundo
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}
Bg1.addEventListener('click', () => {
   //adicionar class active
   Bg1.classList.add('active');
   //remover class active dos outros
   Bg2.classList.remove('active');
   Bg3.classList.remove('active');
   //remover mudanças customizadas do armazenamento local
   window.location.reload();
})
Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  //adicionar class active
  Bg2.classList.add('active');
  //remover class active dos outros
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //adicionar class active
  Bg3.classList.add('active');
  //remover class active
  Bg2.classList.remove('active');
  Bg1.classList.remove('active');
  changeBG();
})