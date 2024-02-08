let contacts = getContacts()
function getContacts(){
    let contacts = localStorage.getItem("contacts")
    if(contacts){
        return JSON.parse(contacts)
    }else {
        return []
      }
}

// Function to add a new contact
function addContact() {
  event.preventDefault();
  let index=getIndex();

  // Get the values from the form
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  // Create a new contact object
  let contact = {
    name: name,
    phone: phone
    emailid: emailid
  };

  // Add the contact to the array
  if(contacts[index]){
   contacts[index]=contact
  }else{
    contacts.push(contact);
  }
  localStorage.setItem("contacts",JSON.stringify(contacts))

  // Clear the form
  document.getElementById("contactForm").reset();
  window.open("http://127.0.0.1:5500/conc.html","_self");
}
function getIndex(){
var url_string = window.location.href;
var url = new URL(url_string);
var index = url.searchParams.get("editIndex");
return index
}
function checkEditMode(){
  setInputValues(getIndex())
}
function setInputValues(index){
  if(contacts[index]){
    let contact = contacts[index]
   document.getElementById("name").value = contact.name;
   document.getElementById("phone").value = contact.phone;
   document.getElementById("emailid").
   document.getElementById("submit").innerText="Update Contact";
  }
  
}
checkEditMode()