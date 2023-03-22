const msg = document.querySelector(".msg")
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email")
const btn = document.getElementById("btn");
const userList = document.getElementById("users")
const phoneNumber = document.getElementById("phoneNumber");
const editBtn = document.getElementById("editBtn");

btn.addEventListener("click", addUserList);

//SUBMITING NEW USER
function addUserList(e) {
    e.preventDefault()
    let userDetails = {
        name: inputName.value,
        phone_Number: phoneNumber.value,
        email_id: inputEmail.value
    }
    axios.post(
        "https://crudcrud.com/api/fa6e0743a9944aeebe930af1560235ba/userDetails", userDetails
    ).then(res => {
        showNewUserOnScreen(res.data)
    }).catch(err => {
        document.write("Something Went Wrong")
    })
    inputEmail.value = ''
    inputName.value = ''
    phoneNumber.value = ''
}

//GETTING ALL THE DATA FROM THE SERVER AND DISPLAY ON THE SCREEN
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/fa6e0743a9944aeebe930af1560235ba/userDetails").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            showNewUserOnScreen(res.data[i])
        }
    })
})

//SHOWING DETAILS ON SCREEN
function showNewUserOnScreen(obj) {
    let childNode = ` <li id="${obj._id}">${obj.name} ${obj.email_id} ${obj.phone_Number}
    <button id="delete" onclick="deleteNode('${obj._id}')">Delete</button>
    <button id="edit" onclick="editNode('${obj._id}','${obj.name}','${obj.email_id}','${obj.phone_Number}')">Edit</button>
  </li>`
    userList.innerHTML = userList.innerHTML + childNode;

}

//DELETE BUTTON
function deleteNode(objId) {
    axios.delete(`https://crudcrud.com/api/fa6e0743a9944aeebe930af1560235ba/userDetails/${objId}`).then(() => {
        removeNodeFromScreen(objId)
    })
}

//EDIT BUTTON
function editNode(objId, objName, objEmail_id, objPhone_Number) {
    deleteNode(objId)
    inputName.value = objName;
    inputEmail.value = objEmail_id
    phoneNumber.value = objPhone_Number;

    btn.style.display = "none"
    editBtn.style.display = 'block'
    removeNodeFromScreen(objId)
}

//CREATING UPDATE BUTTON
editBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let obj = {
        name: inputName.value,
        phone_Number: phoneNumber.value,
        email_id: inputEmail.value
    }
    axios.post(`https://crudcrud.com/api/fa6e0743a9944aeebe930af1560235ba/userDetails`, obj).then((res) => {
        showNewUserOnScreen(res.data)
    })
    editBtn.style.display = "none";
    btn.style.display = 'block';
    inputName.value = "";
    inputEmail.value = "";
    phoneNumber.value = "";

})

//DELETING FROM THE SCREEN
function removeNodeFromScreen(objId) {
    let child = document.getElementById(objId)
    userList.removeChild(child)
}