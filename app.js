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
    li.textContent = `${inputName.value}:- email id: ${inputEmail.value}, Phone Number: ${phoneNumber.value} `
    let deletBtn =  document.createElement("button")
    deletBtn.textContent = "Delete";
    deletBtn.id = "delete"
    deletBtn.style.backgroundColor = "#f4f4f4";
    deletBtn.style.color = 'black'
    li.appendChild(deletBtn)
    userList.appendChild(li)

    //setting localstorage
    let nameValue = JSON.stringify(inputName.value);
    let userDetails = {
        phone_Number : phoneNumber.value,
        email_id : inputEmail.value
    }
    localStorage.setItem(nameValue,JSON.stringify(userDetails)) //serializing the local storage;

    inputEmail.value = ''
    inputName.value = ''
    phoneNumber.value = ''

    deletBtn.addEventListener("click",(e)=>{
        if(e.target.id.contains="delete"){
            console.log(e.target.parentElement.textContent.split(":"))
            e.target.parentElement.remove()
            localStorage.removeItem(JSON.stringify(e.target.parentElement.textContent.split(":")[0]))
        }
    })
}
