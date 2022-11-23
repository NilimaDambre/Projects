const form = document.getElementById('form')
var myRecord = []
form.addEventListener('submit', saveData)

function saveData(e) {
  e.preventDefault()
  console.log(e)

  myRecord.push({
    'FirstName': document.getElementById('fname').value,
    'LastName': document.getElementById('lname').value,
    'Email': document.getElementById('email').value,
    'Phone': document.getElementById('phone').value,
  })
  localStorage.setItem('myRecord', JSON.stringify(myRecord))

  fName = document.getElementById('fname').value = ''
  lName = document.getElementById('lname').value = ''
  email = document.getElementById('email').value = ''
  phone = document.getElementById('phone').value = ''

  // window.location.href="./tableofform.html";
}
