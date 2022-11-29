let myRecord = JSON.parse(localStorage.getItem('myRecord'))

fetchData()

function fetchData() {
  const tbody = document.querySelector('tbody')

  tbody.innerHTML = ''

  for (let i = 0; i < myRecord.length; i++) {
    tbody.innerHTML += `<tr>
        <td>${myRecord[i].id}</td>
        <td>${myRecord[i].FirstName}</td>
        <td>${myRecord[i].LastName}</td>
        <td>${myRecord[i].Email}</td>
        <td>${myRecord[i].Phone}</td>
        <td><span  class="material-symbols-outlined" onclick="deleteItems('${myRecord[i].id}')">
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

function editItems(id) {
  const newRecord = JSON.parse(localStorage.getItem('myRecord'))
  const record = newRecord.find((val) => parseInt(val.id) === parseInt(id))
  console.log(myRecord)
  if (record) {
    document.getElementById('recordId').value = record.id
    document.getElementById('fname').value = record.FirstName
    document.getElementById('lname').value = record.LastName
    document.getElementById('email').value = record.Email
    document.getElementById('phone').value = record.Phone
  }
}

function updateItems() {
  // Get Values From Form
  const id = document.getElementById('recordId').value
  const fName = document.getElementById('fname').value
  const lName = document.getElementById('lname').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value

  // find index for update latest value

  const index = myRecord.findIndex((val) => parseInt(val.id) === parseInt(id))

  // assign new value in existing array
  if (index != -1) {
    myRecord[index] = {
      id: id,
      FirstName: fName,
      LastName: lName,
      Email: email,
      Phone: phone,
    }
  }

  console.log(' ## updated myRecord ## ', myRecord)

  // update localStorage
  localStorage.setItem('myRecord', JSON.stringify(myRecord))

  document.getElementById('recordId').value = ''
  document.getElementById('fname').value = ''
  document.getElementById('lname').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phone').value = ''
  // refresh Data

  fetchData()
}
