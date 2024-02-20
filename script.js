const $panels = document.querySelectorAll('.panel')

$panels.forEach(panel => {
  const leds = Array.from({ length: 8 * 8 }).fill('<div class="led"></div>')
  panel.innerHTML = leds.join('')
})

const defaultColor = '#00FF00'

const $root = document.querySelector(':root')
const $colorLed = document.querySelector('#color-led')

$colorLed.addEventListener("change", updateColorLed, false)

function updateColorLed(event) {
  $root.style.setProperty('--color-led', event.target.value)
}
