let myRecord = JSON.parse(localStorage.getItem('myRecord'))

fetchData()

function fetchData() {
  const tbody = document.querySelector('tbody')

  tbody.innerHTML = ''

  for (let i = 0; i < myRecord.length; i++) {
    tbody.innerHTML += `<tr>
        <td>${myRecord[i].id}</td>
        <td>${myRecord[i].FullName}</td>
        <td>${myRecord[i].Email}</td>
        <td>${myRecord[i].Birthdate}</td>
        <td>${myRecord[i].Phone}</td>
        <td><span  class="material-symbols-outlined deleteButton" onclick="deleteItems('${myRecord[i].id}')">
        delete
        </span></td>
        <td><span id="editBtn" class="material-symbols-outlined editBtn" data-toggle="modal" data-target="#exampleModal" onclick="editItems('${myRecord[i].id}')">
        edit_note
        </span></td>
        
    </tr>`
  }
}

function deleteItems(id) {
  myRecord = myRecord.filter((val) => {
    return val.id != id
  })
  localStorage.setItem('myRecord', JSON.stringify(myRecord))
  fetchData()
}

$(document).ready(function () {
  $('#search-but').on('keyup', function () {
    var value = $(this).val().toLowerCase()
    $('table tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
})

function editItems(id) {
  const newRecord = JSON.parse(localStorage.getItem('myRecord'))
  const record = newRecord.find((val) => parseInt(val.id) === parseInt(id))
  console.log(myRecord)
  if (record) {
    document.getElementById('recordId').value = record.id
    document.getElementById('fname').value = record.FullName
    document.getElementById('email').value = record.Email
    document.getElementById('birthdate').value = record.Birthdate
    document.getElementById('phone').value = record.Phone
  }
}

function updateItems() {
  // Get Values From Form
  const id = document.getElementById('recordId').value
  const fName = document.getElementById('fname').value
  const email = document.getElementById('email').value
  const birthdate = document.getElementById('birthdate').value
  const phone = document.getElementById('phone').value

  // find index for update latest value

  const index = myRecord.findIndex((val) => parseInt(val.id) === parseInt(id))

  // assign new value in existing array
  if (index != -1) {
    myRecord[index] = {
      id: id,
      FullName: fName,
      Email: email,
      Birthdate: birthdate,
      Phone: phone,
    }
  }

  console.log(' ## updated myRecord ## ', myRecord)

  // update localStorage
  localStorage.setItem('myRecord', JSON.stringify(myRecord))

  document.getElementById('recordId').value = ''
  document.getElementById('fname').value = ''
  document.getElementById('email').value = ''
  document.getElementById('birthdate').value = ''
  document.getElementById('phone').value = ''
  // refresh Data

  fetchData()
}
