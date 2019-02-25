import {
  getUsers,
  deleteUser
} from './api/userAPI';
// Dynamically Generate Table data from API with no JS framework


// Populate table of users vai mock API call - do not put slash in path
getUsers('users').then(result => {
  // Start with Empty Obj
  let usersBody = "";
  // Loop through Data and display using Table
  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  // Find Table on Page
  var userTbl = global.document.getElementById('userTbl');
  // Replace blank tablebody with one using Data above
  userTbl.innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName("deleteUser")

  // Must use array.from to create a real array from a DOM collection
  // getElementbyClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    //Attach click handler to each link in the list
    link.onclick = function (event) {
      const element = event.target
      event.preventDefault() // stops any change to the URL
      deleteUser(element.attributes["data-id"].value)
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row) //removes the clicked row from DOM
    }
  })

})
