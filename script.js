const nav = document.querySelector('.nav');
const homeBtn = document.querySelector('.homeBtn');
const abtBtn = document.querySelector('.abtBtn');
const prjBtn = document.querySelector('.prjBtn');
const cntBtn = document.querySelector('.cntBtn');
const menuopenBtn = document.querySelector('.opnBtn')
const menucloseBtn = document.querySelector('.clsBtn')

menuopenBtn.addEventListener('click', () => {
        nav.style.display = 'grid';
        nav.classList.add('navSlideright')
        menuopenBtn.style.display = 'none';
        menucloseBtn.style.display = 'block';
})

menucloseBtn.addEventListener('click', () => {
        nav.classList.add('navSlideleftight')
        menuopenBtn.style.display = 'block';
        menucloseBtn.style.display = 'none';
        setTimeout(() => {
        nav.style.display = 'grid';
        }, 2500)
})

homeBtn.addEventListener('click', () => {
        nav.classList.add('clickedHomebtn')
        nav.classList.remove('clickedAbtbtn')
        nav.classList.remove('clickedPrjbtn')
        nav.classList.remove('clickedCntbtn')

        homeBtn.classList.add('active')
        homeBtn.classList.remove('removeActive')
        abtBtn.classList.add('removeActive')
        prjBtn.classList.add('removeActive')
        cntBtn.classList.add('removeActive')
})

abtBtn.addEventListener('click', () => {
        nav.classList.add('clickedAbtbtn')
        nav.classList.remove('clickedHomebtn')
        nav.classList.remove('clickedPrjbtn')
        nav.classList.remove('clickedCntbtn')

        homeBtn.classList.add('removeActive')
        abtBtn.classList.add('active')
        abtBtn.classList.remove('removeActive')
        prjBtn.classList.add('removeActive')
        cntBtn.classList.add('removeActive')
})

prjBtn.addEventListener('click', () => {
        nav.classList.remove('clickedAbtbtn')
        nav.classList.remove('clickedHomebtn')
        nav.classList.add('clickedPrjbtn')
        nav.classList.remove('clickedCntbtn')

        homeBtn.classList.add('removeActive')
        abtBtn.classList.add('removeActive')
        prjBtn.classList.add('active')
        prjBtn.classList.remove('removeActive')
        cntBtn.classList.add('removeActive')
})

cntBtn.addEventListener('click', () => {
        nav.classList.remove('clickedAbtbtn')
        nav.classList.remove('clickedHomebtn')
        nav.classList.remove('clickedPrjbtn')
        nav.classList.add('clickedCntbtn')

        homeBtn.classList.add('removeActive')
        abtBtn.classList.add('removeActive')
        prjBtn.classList.add('removeActive')
        cntBtn.classList.remove('removeActive')
        cntBtn.classList.add('active')
})


