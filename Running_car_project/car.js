var x
var m = 0
function start() {
  x = setInterval(run, 100)

  function run() {
    if (m == 1200) {
      clearInterval(x)
      m = 0
    } else {
      m = m + 5
      document.getElementById('image').style.visibility = 'visible'
      var target = document.getElementById('image')
      target.style.marginLeft = m + 'px'
    }
  }
  document.querySelector('.btn1').disabled = true
}

function stop() {
  clearInterval(x)
  document.querySelector('.btn1').disabled = false
}

function speedHigh() {
  x = setInterval(run, 10)

  function run() {
    if (m == 1200) {
      clearInterval(x)
      m = 0
    } else {
      m = m + 7
      document.getElementById('image').style.visibility = 'visible'
      var target = document.getElementById('image')
      target.style.marginLeft = m + 'px'
    }
    document.querySelector('.btn3').disabled = true
  }
}
function stop1() {
  document.querySelector('.btn3').disabled = false
}
