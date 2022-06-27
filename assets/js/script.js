//scroll effect
const cardSect = document.getElementById('cardSect')
const navBar = document.querySelector('nav')
const nitrotech = document.getElementById('nitrotech')
window.addEventListener('scroll',function (e) {
    if (window.scrollY > 0) {
        cardSect.classList.remove('!bg-white')
        cardSect.classList.add('bg-black')
        cardSect.classList.add('text-white')
        navBar.classList.add('text-white')
    }else{
        cardSect.classList.add('!bg-white')
        cardSect.classList.remove('bg-black')
        cardSect.classList.remove('text-white')
        navBar.classList.remove('text-white')
    }
})

nitrotech.addEventListener('mouseover', function (e) {
    cardSect.classList.remove('bg-black')
    cardSect.classList.add('bg-purple-500')
})
nitrotech.addEventListener('mouseout', function (e) {
    cardSect.classList.remove('bg-purple-500')
    cardSect.classList.add('bg-black')

})