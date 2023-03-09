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
    let nameValue = JSON.stringify(inputName.value);
    let emailValue = JSON.stringify(inputEmail.value);
    localStorage.setItem(nameValue,emailValue) //serializing the local storage;

    inputEmail.value = ''
    inputName.value = ''
}