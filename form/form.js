const form = document.getElementById('form')

form.addEventListener('submit', saveData)

function saveData(e) {
  e.preventDefault()
  console.log(e)
  let fName, lName, email, phoneNumber, gender  ,state ,message

  fName = document.getElementById('fname').value
  lName = document.getElementById('lname').value
  email = document.getElementById('email').value
  phoneNumber = document.getElementById('phone').value
  gender = document.querySelector('input[name="gen"]:checked').value
  
  state = document.getElementById('state').value?document.getElementById('state').value:'';
  message = document.getElementById('message').value

	var checkBoxes = document.querySelectorAll('input[name="skillss[]"]:checked');

	result = [];
    checkBoxes.forEach(item => { // loop all the checkbox item    
         result.push(item.value); //stored the objects to result array
    });

  localStorage.setItem('First Name', fName)
  localStorage.setItem('Last Name', lName)
  localStorage.setItem('Email', email)
  localStorage.setItem('Phone Number', phoneNumber)
  localStorage.setItem('Gender', gender)
  localStorage.setItem('Skill', result)
  localStorage.setItem('State', state)
  localStorage.setItem('Message', message)
  
  fName = document.getElementById('fname').value = ("");
  lName = document.getElementById('lname').value=("");
  email = document.getElementById('email').value=("");
  phoneNumber = document.getElementById('phone').value=("");
  gender = document.querySelector('input[name="gen"]:checked').value=("");
  skill = document.getElementById('result').value=("");
  state = document.getElementById('state').value=("");
  message = document.getElementById('message').value=("");

}
document.getElementById("btn").onclick = function () {
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var fName = row.insertCell(0);
  var lName = row.insertCell(1);
  var email = row.insertCell(2);
  fName.innerHTML = document.getElementById("fName").value;
  lName.innerHTML = document.getElementById("lName").value;
  email.innerHTML = document.getElementById("email").value;

  return false;

 
}
