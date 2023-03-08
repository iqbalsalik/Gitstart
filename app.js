let item = document.getElementById("item");
const submitBtn = document.getElementById("submitBtn")
const itemList = document.getElementById("items")
const filter = document.getElementById("filter");
const itemDescription = document.getElementById("description")

submitBtn.addEventListener("click", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup",filterItems)

function addItem(e){
    e.preventDefault();
    //creating li element
    let newLi = document.createElement("li");
    // adding className
    newLi.className = "list-group-item"
    // creating deleteBtn
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.innerText = "X"

    //creating edit button
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm float-right edit ml-1"
    editBtn.appendChild(document.createTextNode("edit"))
    // appendChild to created li
    newLi.innerText = item.value;
    newLi.appendChild(editBtn)
    newLi.appendChild(deleteBtn);
    itemList.appendChild(newLi)
    item.value = ''

    let descriptionText = document.createTextNode(" " + itemDescription.value)
    newLi.appendChild(descriptionText)
    itemDescription.value = ''
}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentElement;
        itemList.removeChild(li)
    }
}

function filterItems(e){
   let filterText =  e.target.value.toLowerCase();
   let itemText = document.querySelectorAll("li")
   Array.from(itemText).forEach(item=>{
    let description = item.childNodes[3].textContent.toLowerCase()
    console.log(description)
    if(item.firstChild.textContent.toLowerCase().indexOf(filterText)!=-1 ||description.indexOf(filterText)!=-1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
   })
}

