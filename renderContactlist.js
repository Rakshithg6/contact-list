let contacts = getContacts()

function getContacts(){
    let contacts = localStorage.getItem("contacts")
    if(contacts){
        return JSON.parse(contacts)
    }else {
        return []
    }
}

function displayContacts() {
    let contactList = document.getElementById("contactList");
    contactList.innerHTML = "";
  
    // Loop through the contacts array and create list items
    for (let i = 0; i < contacts.length; i++) {
      let li = document.createElement("li");
      li.textContent = contacts[i].name + " - " + contacts[i].phone;
  
      // Add delete button to each contact
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        deleteContact(i);
      });
      li.appendChild(deleteButton);
  
      // Add edit button to each contact
      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function() {
        editContact(i);
      });
      li.appendChild(editButton);
  
      // Add the list item to the contact list
      contactList.appendChild(li);
    }
  }
// Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1); // Remove the contact from the array
    localStorage.setItem("contacts",contacts)
    displayContacts(); // Refresh the contact list
  }
  
  // Function to edit a contact
  function editContact(index) {
    window.open(`http://127.0.0.1:5500/contact.html?editIndex=${index}`,"_self");
  }
  function openAddContact(){
    window.open(`http://127.0.0.1:5500/contact.html`,"_self");
  }
  function deleteAll(){
    localStorage.clear()
    contacts = []
    displayContacts()
  }
  displayContacts();  
