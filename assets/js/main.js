var clockTarget = document.getElementById('clock'),
    updateTimeID

var button1 = document.getElementById('slideUp'),
    button2 = document.getElementById('slideDown')
    mainPage = document.getElementById('mainPage')
    slidePane = document.getElementById("clockContainer"),
    mainPane = document.getElementById('mainContainer')

const bgMin = 0,
      bgMax = 6

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function updateTime(target) {
    return setInterval(() => {
        var d = new Date(),
            h = d.getHours(),
            m = d.getMinutes()
            if (h < 10) {
                h = '0' + h
            }
            if (m < 10) {
                m = '0' + m
            }
            console.log(`Time: ${h}:${m}`); // Just for test
            // Prevent too much textConetnt update
            var time = `${h}:${m}`
            if (target.textContent !== time) {
                target.textContent = time
                console.log('Time update');
            }
    }, 1000)
}

function stopClock(intervelID) {
    clearInterval(intervelID)
}

function randomBackground(MIN, MAX) {
    var n = randomIntFromInterval(MIN, MAX)
    mainPage.style = `--url: url(/assets/img/cover/cover_${n}.png)`
}

function parsePageState() {
    if (localStorage.getItem('mainPage') === null) {
        localStorage.setItem('mainPage', "false")
    }
    var state = localStorage.getItem("mainPage")
    if (state === "true") {
        mainPage.setAttribute("hideMainPage", "false")
        slidePane.setAttribute("hide","")
    } else {
        mainPage.setAttribute("hideMainPage", "true")
        mainPane.setAttribute("hide", "")
    }
}

function init() {
    randomBackground(bgMin, bgMax)
    parsePageState()
    updateTimeID = updateTime(clockTarget)
}

init()

button1.addEventListener('click',() => {
    attStatus = mainPage.getAttribute('hidemainpage')
    if (attStatus === "true") {
        mainPage.setAttribute("hideMainPage", "false");
        setTimeout(() => {
            slidePane.style = "display: none"
            mainPane.toggleAttribute('hide')
        }, 1000)
        localStorage.setItem("mainPage", "true")
    }
})

button2.addEventListener('click',() => {
    console.log('A');
    attStatus = mainPage.getAttribute('hidemainpage')
    if (attStatus === "false") {
        mainPane.setAttribute("hide","")
        slidePane.removeAttribute("hide")
        slidePane.style = ""
        mainPage.setAttribute("hidemainpage", "true")
        localStorage.setItem("mainPage", "false")
    }
})

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
    if (map[17] && map[16] && map[88]) {
        console.log('NSFW keypress');
        mainPage.toggleAttribute("NSFW")
    }
}

var searchTarget = document.getElementById('searchInput')

searchTarget.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        var content = searchTarget.value

        if (content === "$reload") {
           window.location.reload()
        } else if (content === "$randomBG") {
            randomBackground(bgMin, bgMax)
        } else if (content === "$NSFW" || content === "$snfw" || content === "$r18mode") {
            mainPage.toggleAttribute("NSFW")
        } else {
            content = content.replaceAll(' ', '+')
            window.open(`https://www.google.com/search?q=${content}`, '_blank')
        }
        searchTarget.value = ""
    }
})