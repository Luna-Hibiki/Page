var clockTarget = document.getElementById('clock'),
    updateTimeID

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

function init() {
    updateTimeID = updateTime(clockTarget)
}

init()

var button1 = document.getElementById('slideUp'),
    button2 = document.getElementById('slideDown')
    mainPage = document.getElementById('mainPage')
    slidePane = document.getElementById("clockContainer"),
    mainPane = document.getElementById('mainContainer')
    
button1.addEventListener('click',() => {
    attStatus = mainPage.getAttribute('hidemainpage')
    if (attStatus === "true") {
        mainPage.setAttribute("hideMainPage", "false");
        setTimeout(() => {
            slidePane.style = "display: none"
            mainPane.toggleAttribute('hide')
        }, 1000)
    }
})

button2.addEventListener('click',() => {
    console.log('A');
    attStatus = mainPage.getAttribute('hidemainpage')
    if (attStatus === "false") {
        mainPane.toggleAttribute('hide')
        slidePane.style = ""
        mainPage.setAttribute("hidemainpage", "true")
    }
})

var searchTarget = document.getElementById('searchInput')

searchTarget.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        var content = searchTarget.value

        if (content === "$reload") {
            return window.location.reload()
        }

        content = content.replaceAll(' ', '+')
        window.open(`https://www.google.com/search?q=${content}`, '_blank')
        searchTarget.value = ""
    }
})