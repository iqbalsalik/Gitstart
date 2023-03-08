const msg = document.querySelector(".msg")
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email")
const btn = document.getElementById("btn");
const userList = document.getElementById("users")

btn.addEventListener("click",addUserList);

function addUserList(e){
    e.preventDefault()
    //creating li name and email id given by user and appending in ul
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = `${inputName.value} : ${inputEmail.value}`
    userList.appendChild(li)

    //setting localstorage
    localStorage.setItem(inputName.value,inputEmail.value)

    inputEmail.value = ''
    inputName.value = ''
}