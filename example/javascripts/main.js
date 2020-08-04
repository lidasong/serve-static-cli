const $count = document.getElementById('count')
let count = 1
setInterval(() => {
    $count.textContent = count++
}, 1000)