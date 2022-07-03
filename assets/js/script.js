//scroll effect
const main = document.querySelector('main')
const cardSect = document.getElementById('cardSect')
const navBar = document.querySelector('nav')
const nitrotech = document.getElementById('nitrotech')
const projects = document.querySelectorAll('#projects div')
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

projects.forEach(function (project) {
    if (project.getAttribute('id') == 'nitrotech') {
        projectEvent(project, 'bg-[#01285E]')
    }else if (project.getAttribute('id') == 'nitcrete') {
        projectEvent(project, 'bg-[#F2C010]')
    }else if (project.getAttribute('id') == 'nitkeeb') {
        projectEvent(project, 'bg-white')
    }else if (project.getAttribute('id') == 'nittactoe') {
        projectEvent(project, 'bg-[#009DAE]')
    }else if (project.getAttribute('id') == 'nitcount') {
        projectEvent(project, 'bg-[#00ADB5]')
    }else if (project.getAttribute('id') == 'nitplaylist') {
        projectEvent(project, 'bg-[#1DB954]')
    }else if (project.getAttribute('id') == 'nitlaxi') {
        projectEvent(project, 'bg-[#080C2C]')
    }else if (project.getAttribute('id') == 'nittype') {
        projectEvent(project, 'bg-[#e10d00]')
    }else if (project.getAttribute('id') == 'nitopdf') {
        projectEvent(project, 'bg-[#3F8812]')
    }else if (project.getAttribute('id') == 'nitmate') {
        projectEvent(project, 'bg-[#B20600]')
    }
})

function projectEvent(id, color) {
    id.addEventListener('mouseover', function (e) {
        cardSect.classList.remove('bg-black')
        cardSect.classList.add(color)
        main.classList.remove('bg-black')
        main.classList.add(color)
    })
    id.addEventListener('mouseout', function (e) {
        cardSect.classList.remove(color)
        cardSect.classList.add('bg-black')
        main.classList.add('bg-black')
        main.classList.remove(color)
    
    })
}

//skill function
const skillOptions = document.querySelectorAll('#skillOption div')
const skillPage = document.getElementById('skillPage')
skillOptions.forEach(function (skillOption) {
    skillOption.addEventListener('click', function (e) {
        if(e.target.textContent == 'FRONTEND') {
            slideSkill('-translate-x-0')
        }else if (e.target.textContent == 'BACKEND') {
            slideSkill('-translate-x-1/4')
        }else if (e.target.textContent == 'DATABASE') {
            slideSkill('-translate-x-1/2')
        }else{
            slideSkill('-translate-x-3/4')
        }
        skillNow(e.target)
    })
})

function skillNow(optionNow) {
    skillOptions.forEach(function (skillOption) {
        skillOption.classList.remove('before:-translate-x-0')
        skillOption.classList.add('before:-translate-x-full')
    })
    optionNow.classList.add('before:-translate-x-0')
    optionNow.classList.remove('before:-translate-x-full')
}

function slideSkill(slideNew) {
    skillPage.classList.remove('-translate-x-0')
    skillPage.classList.remove('-translate-x-1/2')
    skillPage.classList.remove('-translate-x-1/4')
    skillPage.classList.remove('-translate-x-3/4')
    skillPage.classList.add(slideNew)
}

//Clock With Javascript
function realTime() {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();
    let meridiem = 'AM';
    let dayName = now.getDay();
    // let dayNum = now.getDate();
    // let month = now.getMonth();
    // let year = now.getFullYear();

    if (hour == 0) {
        hour = 12;
    }
    if (hour >12) {
        hour -= 12;
        meridiem = "PM"
    }

    Number.prototype.pad = function (digit) {
        for (var n = this.toString(); n.length < digit; n = 0 + n);
        return n;
    }

    const months = ["January","February","March","April","May","June","July","Agustus","September","Oktober","November","Desember"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const ids = ['day', 'hour','minute','meridiem'];
    const values = [days[dayName]+" ",hour.pad(2)+':',minute.pad(2),meridiem];
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
            
    }
};
function updating() {
    realTime();
    window.setInterval('realTime()', 1);
};
updating()