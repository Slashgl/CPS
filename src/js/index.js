import '../scss/style.scss'
import { auto } from 'html-webpack-plugin/lib/chunksorter';
document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const clientWidth = document.body.clientWidth;
    const swiper = document.querySelector('.swiper').swiper;

    const menu = document.querySelector('.aside-menu');
    const menuBtn = document.querySelector('.btn__hamburger');
    const closeBtn = document.querySelectorAll('.aside-menu__close');

    const more = document.querySelector('.more');
    const showBrands = document.querySelector('.show-brands');
    const showRepair = document.querySelector('.show-repair');

    const slidesRepair = document.querySelectorAll('.visibleRepair');
    const slides = document.querySelectorAll('.visibleBrands');
    const servicesText768px = document.querySelector('.services__min-width768');
    const servicesText1120px = document.querySelector('.services__min-width1120');
    const closeText = document.querySelector('.services__description-hidden');

    const btnFeedBack = document.querySelectorAll('.btn__chat');
    const menuFeedBack = document.querySelector('.feedback');

    const btnCall = document.querySelectorAll('.btn__call');
    const menuCall = document.querySelector('.call');

    more.addEventListener('click', () => {
        more.classList.toggle('rotate-arrow');
    })


    showBrands.addEventListener('click', () => {
        slides.forEach((el) => el.classList.toggle('brandsHidden'));
        showBrands.classList.toggle('rotate-arrow');
    });

    showRepair.addEventListener('click', () => {
        slidesRepair.forEach((el) => el.classList.toggle('hiddenRepair'));
        showRepair.classList.toggle('rotate-arrow');
    })




    more.addEventListener('click', () => {
        servicesText768px.classList.add('activeText');
        servicesText1120px.classList.add('activeText');
        closeText.classList.toggle('closeText');
    });

    menuBtn.addEventListener('click', () => {

        menu.classList.remove('closeAside');
    });

    closeBtn.forEach(el => {
        el.addEventListener('click', () => {
            closedOverlay();
            menu.classList.add('closeAside');
            menu.classList.remove('active');

            menuFeedBack.classList.add('close');
            menuFeedBack.classList.remove('active');

            menuCall.classList.add('close');
            menuCall.classList.remove('active');

        });
    })
    overlay.addEventListener('click', ({target}) => {
        if(target.className.includes('overlay')) {
            closedOverlay()
            menu.classList.add('closeAside');
            menuFeedBack.classList.add('close');
            menuCall.classList.add('close');
        }
    })

    function openOverlay() {
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
    }
    function closedOverlay() {
        overlay.style.display = 'none';
        body.style.overflow = 'visible';
    }
// Modal
    btnFeedBack.forEach(el => {
        el.addEventListener('click', () => {
            menuFeedBack.classList.remove('close');
            openOverlay();
        });
    })

    btnCall.forEach(el => {
        el.addEventListener('click', () => {
            openOverlay();
            menuCall.classList.remove('close');
        });
    })

  if(clientWidth < 331) {
    new Swiper('.swiper', {
      direction: 'horizontal',
      slidePerView: 'auto',
      slidesPerView: 1,
      initialSlide: 0,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});
