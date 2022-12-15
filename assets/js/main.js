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