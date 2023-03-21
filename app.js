const msg = document.querySelector(".msg")
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email")
const btn = document.getElementById("btn");
const userList = document.getElementById("users")
const phoneNumber = document.getElementById("phoneNumber");

btn.addEventListener("click", addUserList);



 

function addUserList(e) {
    e.preventDefault()
    //setting localstorage
    let userDetails = {
        name: inputName.value,
        phone_Number: phoneNumber.value,
        email_id: inputEmail.value
    }
    // localStorage.setItem(nameValue, JSON.stringify(userDetails)) //serializing the local storage;
    axios.post( 
        "https://crudcrud.com/api/a01e403308614170ba4b8a1edb4bee10/uderDetails",userDetails
     ).then(res=>{
        showNewUserOnScreen(res.data)
     }).catch(err=>{
        console.log(err)
     })

    inputEmail.value = ''
    inputName.value = ''
    phoneNumber.value = ''

    // deletBtn.addEventListener("click", (e) => {
    //     if (e.target.id.contains = "delete") {
    //         e.target.parentElement.remove()
    //         localStorage.removeItem(JSON.stringify(e.target.parentElement.textContent.split(":")[0]))
    //     }
    // })

    // editBtn.onclick = (e) => {
    //     if (e.target.id.contains = "edit") {
    //         let targetData = e.target.parentElement.textContent.split(":")
    //         e.target.parentElement.remove()
    //         localStorage.removeItem(JSON.stringify(targetData[0]))
    //         inputName.value = targetData[0];
    //         inputEmail.value = targetData[1];
    //         phoneNumber.value = targetData[2]
    //     }
    // }
}


window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/a01e403308614170ba4b8a1edb4bee10/uderDetails").then((res)=>{
        
        for(let i =0;i<res.data.length;i++){
            showNewUserOnScreen(res.data[i])
        }
        
    })
})

function showNewUserOnScreen(obj){
// creating li name and email id given by user and appending in ul
let li = document.createElement("li");
li.className = "item";


// createing delete button
let deletBtn = document.createElement("button")
deletBtn.textContent = "Delete";
deletBtn.id = "delete"
deletBtn.style.backgroundColor = "#f4f4f4";
deletBtn.style.color = 'black'


// creating edit button;
let editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.id = "edit";
editBtn.style.backgroundColor = "#f4f4f4";
editBtn.style.color = "black";
editBtn.style.marginLeft = "4px"
li.innerText = `${obj.name} ${obj.email_id} ${obj.phone_Number}`
li.appendChild(deletBtn)
li.appendChild(editBtn)
userList.appendChild(li)
}