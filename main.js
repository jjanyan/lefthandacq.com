const emailLinks = document.querySelectorAll('.js-email-link')
const emailText = document.querySelector('.js-email-text')
const currentYear = document.querySelector('#current-year')

const parts = ['qcadnahtfel', 'liamg', 'moc']

const reverse = (value) => [...value].reverse().join('')
const email = [
  reverse(parts[0]),
  String.fromCharCode(64),
  reverse(parts[1]),
  String.fromCharCode(46),
  reverse(parts[2]),
].join('')

emailLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = ['mailto:', email].join('')
  })
})

if (emailText) {
  emailText.textContent = email
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear().toString()
}
