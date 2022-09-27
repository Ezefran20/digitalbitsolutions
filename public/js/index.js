const toggleBtn = document.querySelector('#toggle');
const openClose = document.querySelector('#open-close')

toggleBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    openClose.classList.toggle('mobile-menu')
})








