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
        <td><input type="button" value='Delete' onclick="deleteItems('${myRecord[i].id}')"></td>
    </tr>`
  }
}

function deleteItems(id) {
  myRecord = myRecord.filter((val) => {
    return val.id != id
  })

  localStorage.setItem('myRecord', JSON.stringify(myRecord))

  // call the function to insert table data
  fetchData()
}

// initially it will call when first time page loads

// function removeMessage (id) {
//   // iterate through the existing todoList
//   // and using filter remove the todo that has an id
//   // matching the todo we clicked delete on
//   todoList = todoList.filter(
//     function(todo) {
//       // only return the ones that don't match
//       return todo.id !== id;
//     }
//   )

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

// function onDeleteRow(e) {
//   if (!e.target.tbody.contains('deleteBtn')) {
//     return
//   }

//   const btn = e.target
//   btn.closest('tr').remove()
// }

// form.addEventListener('submit', onAddValue)
// table.addEventListener('click', onDeleteRow)
