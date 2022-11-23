var myRecord = JSON.parse(localStorage.getItem('myRecord'))
console.log(myRecord);
const tbody = document.querySelector('tbody')
const table = document.querySelector('table')


let tableRowsData = "";

for (let i = 0; i < myRecord.length; i++) {
  console.log(myRecord[i].FirstName);
  console.log(myRecord[i].LastName);
  console.log(myRecord[i].Email);
  console.log(myRecord[i].Phone);

  var tableRow =  `<tr>
        <td>${myRecord[i].FirstName}</td>
        <td>${myRecord[i].LastName}</td>
        <td>${myRecord[i].Email}</td>
        <td>${myRecord[i].Phone}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>`;
    tbody.innerHTML = tbody.innerHTML + tableRow;
}

//tbody.innerHTML = tableRowsData;

// tbody.innerHTML += `
// <tr>
//     <td>${localStorage.getItem('First name')}</td>
//     <td>${localStorage.getItem('lName')}</td>
//     <td>${localStorage.getItem('email')}</td>
//     <td>${localStorage.getItem('phone')}</td>
//     <td><button class="deleteBtn">Delete</button></td>
// </tr>
// `

function onDeleteRow(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return
  }

  const btn = e.target
  btn.closest('tr').remove()
}

form.addEventListener('submit', onAddValue)
table.addEventListener('click', onDeleteRow)
