import {getUsers, deleteUser} from './api/userAPI';

// Populate table of users vai mock API call - do not put slash in path
getUsers('users').then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  var userTbl = global.document.getElementById('userTbl');
  userTbl.innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName("deleteUser")

  // Must use array.from to create a real array from a DOM collection
  // getElementbyClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    //Attach click handler to each link in the list
    link.onclick = function(event) {
      const element = event.target
      event.preventDefault() // stops any change to the URL
      deleteUser(element.attributes["data-id"].value)
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row) //removes the clicked row from DOM
    }
  })

})
