const msg = document.querySelector(".msg")
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email")
const btn = document.getElementById("btn");
const userList = document.getElementById("users")
const phoneNumber = document.getElementById("phoneNumber");
const editBtn = document.getElementById("editBtn");



btn.addEventListener("click", addUserList);

//SUBMITING NEW USER
async function addUserList(e) {
    e.preventDefault()
    let userDetails = {
        userName: inputName.value,
        userEmailId: inputEmail.value,
        userPhoneNumber: phoneNumber.value
    }
    try {
        const res = await axios.post("http://localhost:3000/add-users", JSON.stringify(userDetails));
        showNewUserOnScreen(res.data.newUserDetail)
    } catch (error) {
        const responseData = error.response.data;
        console.log(responseData)
        document.write(`<h1>${responseData.error}</h1>`)
    }
    inputEmail.value = ''
    inputName.value = ''
    phoneNumber.value = ''
}

//GETTING ALL THE DATA FROM THE SERVER AND DISPLAY ON THE SCREEN
window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/users").then((res) => {
        for (let i = 0; i < res.data.userDetails.length; i++) {
            showNewUserOnScreen(res.data.userDetails[i])
        }
    })
})

//SHOWING DETAILS ON SCREEN
function showNewUserOnScreen(obj) {
    let childNode = ` <li id="${obj.id}">${obj.userName} ${obj.userEmailId} ${obj.userPhoneNumber}
    <button id="delete" onclick="deleteNode('${obj.id}')">Delete</button>
    <button id="edit" onclick="editNode('${obj.id}','${obj.userName}','${obj.userEmailId}','${obj.userPhoneNumber}')">Edit</button>
  </li>`
    userList.innerHTML = userList.innerHTML + childNode;

}

//DELETE BUTTON
async function deleteNode(objId) {
    await axios.delete(`http://localhost:3000/users/${objId}`)
    removeNodeFromScreen(objId)
}

//EDIT BUTTON
async function editNode(objId, objName, userEmailId, userPhoneNumber) {
    await deleteNode(objId)
    inputName.value = objName;
    inputEmail.value = userEmailId
    phoneNumber.value = userPhoneNumber;

    btn.style.display = "none"
    editBtn.style.display = 'block'
    // removeNodeFromScreen(objId)
}

//CREATING UPDATE BUTTON
editBtn.addEventListener("click",async (e) => {
    e.preventDefault()
    let userDetails = {
        userName: inputName.value,
        userEmailId: inputEmail.value,
        userPhoneNumber: phoneNumber.value
    }
    try {
        const res = await axios.post("http://localhost:3000/add-users", JSON.stringify(userDetails));
        showNewUserOnScreen(res.data.newUserDetail)
    } catch (error) {
        const responseData = error.response.data;
        document.write(`<h1>${responseData.error}</h1>`)
    }
    inputEmail.value = ''
    inputName.value = ''
    phoneNumber.value = ''

})

//DELETING FROM THE SCREEN
function removeNodeFromScreen(objId) {
    let child = document.getElementById(objId)
    userList.removeChild(child)
}