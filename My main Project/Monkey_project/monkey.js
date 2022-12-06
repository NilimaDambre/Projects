const closedEye = document.querySelector('.closed')
const openEye = document.querySelector('.open')

console.log(closedEye)
console.log(openEye)

closedEye.addEventListener('click', () => {
  if (openEye.classList.contains('open')) {
    openEye.classList.add('active')
    closedEye.classList.remove('active')
  }
})

openEye.addEventListener('click', () => {
  if (closedEye.classList.contains('closed')) {
    closedEye.classList.add('active')
    openEye.classList.remove('active')
  }
})
