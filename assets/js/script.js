const hsky = document.querySelector('#hsky')
const hman = document.querySelector('#hman')
const hm3 = document.querySelector('#hm3')
const hm2 = document.querySelector('#hm2')
const hm1 = document.querySelector('#hm1')
const htxtx = document.querySelector('#htxt')

window.addEventListener('scroll', function() {
  let value = window.scrollY

  if (value >= 200) {
    htxt.style.opacity = 0
  } else {
    htxt.style.opacity = 1
  }

  hm1.style.bottom = value * 0.15 + 'px'
  hm2.style.bottom = -value * 0.15 + 'px'
  hsky.style.top = value * 0.2 + 'px'
})
