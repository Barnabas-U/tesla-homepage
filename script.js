const menuBtn1 = document.getElementById('side-menu');
const menu2 = document.querySelector('.menu2');
const xBtn = document.getElementById('x-button');
const body = document.querySelector('.body');
const menu3 = document.querySelector('.menu3');
const main = document.querySelector('.main');

menuBtn1.addEventListener('click', function() {
    menu2.style.display = "block";
    body.className = 'stop-scrolling';
})

xBtn.addEventListener('click', function() {
    menu2.style.display = "none";
    body.className = 'start-scrolling';
})

document.getElementById('side-menu2').addEventListener('click', function() {
    menu3.style.display = "block";
    body.className = 'stop-scrolling';
})

document.getElementById('x-button2').addEventListener('click', function() {
    menu3.style.display = 'none';
    body.className = 'start-scrolling';
})

main.addEventListener('click', function() {
    if (menu3.style.display === 'block') {
        menu3.style.display = 'none';
    }

    if (menu2.style.display === 'block') {
        menu2.style.display = 'none';
    }
})