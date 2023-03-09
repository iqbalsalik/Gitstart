const msg = document.querySelector(".msg")
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email")
const btn = document.getElementById("btn");
const userList = document.getElementById("users")
const phoneNumber = document.getElementById("phoneNumber");

btn.addEventListener("click",addUserList);

function addUserList(e){
    e.preventDefault()
    //creating li name and email id given by user and appending in ul
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = `${inputName.value} :- email id: ${inputEmail.value}, Phone Number: ${phoneNumber.value} `
    userList.appendChild(li)

    //setting localstorage
    let phoneValue = JSON.stringify(phoneNumber.value)
    let nameValue = JSON.stringify(inputName.value);
    let emailValue = JSON.stringify(inputEmail.value);
    localStorage.setItem(emailValue,[nameValue,phoneValue]) //serializing the local storage;

    inputEmail.value = ''
    inputName.value = ''
}