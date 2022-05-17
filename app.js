let menuBtn = document.getElementById('menu-btn');

let menuLIst = document.getElementById('menu-list');

let closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', function () {
    console.log('click');
    menuLIst.style.transform = ('translateX(0vw)')
})


closeBtn.addEventListener('click', function () {
    console.log('click')
    menuLIst.style.transform = ('translateX(100vw)')
})