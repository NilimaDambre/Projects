const form= document.querySelector("form");
      const tbody = document.querySelector("tbody");
      const table = document.querySelector("table");
      function onAddValue(e) {
        e.preventDefault();
        const fName = document.getElementById("fname").value;
        const lName = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        
        tbody.innerHTML += `
            <tr>
                <td>${fName}</td>
                <td>${lName}</td>
                <td>${email}</td>
                <td>${phone}</td>

                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
        localStorage.setItem('First Name', fName)
        localStorage.setItem('Last Name', lName)
        localStorage.setItem('Email', email)
        localStorage.setItem('Phone Number', phone)


      }
      

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      form.addEventListener("submit", onAddValue);
      table.addEventListener("click", onDeleteRow);


