import './scss/style.scss';


let burgerBtn = document.querySelector('.burger-btn');
let burgerMenu = document.querySelector('.header-menu')

burgerBtn.addEventListener('click', function () {
    if (burgerBtn.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        burgerMenu.style.height = '15%';
        document.querySelector('body').style.overflow = 'visible';

    } else {
        burgerBtn.classList.add('active');
        burgerMenu.style.height = '100%';
        document.querySelector('body').style.overflow = 'hidden';
    }
});


$(document).ready(function () {
    $('.slider-team').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        dots: true,
        Padding: '40px',
        prevArrow: '.prev_btn',
        nextArrow: '.next_btn',
        responsive: [
            {
                breakpoint: 1221,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
});

$(document).ready(function () {
    $('.slider-reviews').slick({
        slidesToShow: 1.89,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1.6,
                }
            },
            {
                breakpoint: 1221,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })
});

let faqBlocks = document.querySelector('.faq-questions');
let faqItem = document.querySelector('.faq-questions__item');

faqBlocks.onclick = function(event) {
    let target = event.target;

    while (target != this) {
        let btnAccordion = event.target.closest('.cover-btn');
        if (!btnAccordion) return;
        if (!faqBlocks.contains(btnAccordion)) return;
        if (target.className === 'faq-questions__item') {
            openAccordion(target);
            return;
        }
        if (target.className === 'faq-questions__item uncover') {
            closeAccordion(target);
            return;
        }
        target = target.parentNode;
    }
}

function openAccordion(node) {
    if (faqItem.classList.contains('uncover')) {
        faqItem.classList.remove('uncover');
    }
    faqItem = node;
    faqItem.classList.add('uncover');
}

function closeAccordion(node) {
    faqItem = node;
    if (faqItem.classList.contains('uncover')) {
        faqItem.classList.remove('uncover');
    }
}