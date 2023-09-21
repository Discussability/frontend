let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');
let elem = document.getElementById('textBox');
let box = elem.getBoundingClientRect();

window.addEventListener('scroll', () => {
    if (window.scrollY + box.height+50 < box.bottom) {
        let value = window.scrollY;

        back1.style.top = value * 1.8 + 'px';
        back2.style.top = value * 1.1 + 'px';
        back3.style.top = value * 1.3 + 'px';
    }
});


