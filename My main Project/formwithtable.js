const form = document.getElementById('form')
var myRecord = []
form.addEventListener('submit', saveData)

function saveData(e) {
  e.preventDefault()
  myRecord.push({
    id: Math.floor(Math.random() * 100),
    FullName: document.getElementById('fname').value,
    Email: document.getElementById('email').value,
    Birthdate: document.getElementById('birthdate').value,
    Phone: document.getElementById('phone').value,
  })
  localStorage.setItem('myRecord', JSON.stringify(myRecord))

  fName = document.getElementById('fname').value = ''
  email = document.getElementById('email').value = ''
  birthdate = document.getElementById('birthdate').value = ''
  phone = document.getElementById('phone').value = ''

  // window.location.href="./tableofform.html";
}
