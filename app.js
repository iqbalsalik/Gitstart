console.log("first git project")

console.log(document.title)
document.title = "someThing else"
console.log(document.title)
const header = document.getElementById("main-header")
header.style.borderBottom = "3px solid black"
const addItem = document.querySelector("h2");
addItem.style.fontWeight = "bold"
addItem.style.color = "green"

const items = document.getElementsByClassName("list-group-item");

items[2].style.backgroundColor = "green"

for(let i =0;i<items.length;i++){
    items[i].style.fontWeight = "bold"
    items[i].style.color = "red"
}
