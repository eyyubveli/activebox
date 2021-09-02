const menu = document.getElementById('menu');
const bar = document.getElementById('bar');

bar.addEventListener('click', () => {
    menu.classList.toggle('active');
    bar.classList.toggle('fa-times')
})

window.addEventListener("scroll", () => {
    var header = document.querySelector(".header");
    if(window.scrollY > 150){
       header.classList.add('active')
    }

    else{
        header.classList.remove('active')
    }
})