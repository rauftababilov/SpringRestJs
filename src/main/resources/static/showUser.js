const url = "http://localhost:8080/getUser";
let output = ""

function getUser() {

    fetch(url)
        .then(res => res.json())
        .then((user) => {

            output += ` 
                <tr>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.roles.map(role => role.name)}</td>
                </tr>
            `;

            document.getElementById("userInfo").innerHTML = output;
        })
}


function getHeader() {
    fetch(url).then((res) => res.json())
        .then((user) => {
            let output = "";
            output += `${user.email} with roles: ${user.roles.map(role => role.name)}`;
            document.getElementById("showHeader").innerHTML = output;
        })
}
getHeader()
getUser()

