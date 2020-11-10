const hman = document.querySelector('#hman')
const hm1 = document.querySelector('#hm1')
const hm2 = document.querySelector('#hm2')
const hm3 = document.querySelector('#hm3')
const htxtx = document.querySelector('#htxt')

window.addEventListener('scroll', function() {
  let value = window.scrollY

  console.log(value)

  if (value > 200) {
    htxt.style.opacity = 0
  } else {
    htxt.style.opacity = 1
  }

  hm1.style.top = -value * 0.15 + 'px'

})