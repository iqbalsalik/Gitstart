let item = document.getElementById("item");
const submitBtn = document.getElementById("submitBtn")
const itemList = document.getElementById("items")


submitBtn.addEventListener("click", e => {
    e.preventDefault();
    let newLi = document.createElement("li");
    newLi.className = "list-group-item"
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.innerText = "X"
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-right edit ml-1"
    editBtn.appendChild(document.createTextNode("edit"))
    newLi.innerText = item.value;
    newLi.appendChild(editBtn)
    newLi.appendChild(deleteBtn);
    itemList.appendChild(newLi)
    item.value = ''
});

itemList.addEventListener("click", removeItem);

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentElement;
        itemList.removeChild(li)
    }
}