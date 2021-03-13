function allUsers() {
    fetch("http://localhost:8080/allUsers")
        .then((res) => res.json())
        .then((data) => {
            let output = "";
            data.forEach(function (user) {

                output += `
                <tr>
                <td id="id${user.id}">${user.id}</td>
                <td id="firstName${user.id}">${user.firstName}</td> 
                <td id="lastName${user.id}">${user.lastName}</td>
                <td id="age${user.id}">${user.age}</td>
                <td id="email${user.id}">${user.email}</td>
                <td hidden id="password${user.id}">${user.password}</td>
                <td id="roles${user.id}">${user.roles.map(role => role.name)}</td>
                <td>
                <a class="btn btn-info" role="button" data-target="#modalEdit" 
                data-toggle="modal" onclick="openModalWindowEdit(${user.id})">Edit</a>
                </td>
                <td>
                <a class="btn btn-danger" role="button" data-target="#modalDelete" 
                data-toggle="modal" onclick="openModalWindowDelete(${user.id})">Delete</a>
                </td>
              </tr>

          `;
            });
            document.getElementById("allUsers").innerHTML = output;
        })
}

function openModalWindowEdit(id) {
    document.getElementById("idEdit").value = id;
    document.getElementById("firstNameEdit").value = $("#firstName" + id).text();
    document.getElementById("lastNameEdit").value = $("#lastName" + id).text();
    document.getElementById("ageEdit").value = $("#age" + id).text();
    document.getElementById("emailEdit").value = $("#email" + id).text();
    document.getElementById("passwordEdit").value = $("#password" + id).text();
}

function openModalWindowDelete(id) {
    document.getElementById("idDelete").value = id;
    document.getElementById("firstNameDelete").value = $("#firstName" + id).text();
    document.getElementById("lastNameDelete").value = $("#lastName" + id).text();
    document.getElementById("ageDelete").value = $("#age" + id).text();
    document.getElementById("emailDelete").value = $("#email" + id).text();
    document.getElementById("passwordDelete").value = $("#password" + id).text();

}

allUsers()