console.log("first git project")

console.log(document.title)
document.title = "someThing else"
console.log(document.title)
const header = document.getElementById("main-header")
header.style.borderBottom = "3px solid black"
const addItem = document.querySelector("h2");
addItem.style.fontWeight = "bold"
addItem.style.color = "green"
const add = document.getElementById("add");
const btn = document.getElementById("btn");
const li = document.querySelectorAll("li");
let count = 0;
let number = 1;
btn.addEventListener("click",(e)=>{
e.preventDefault()
if(add.value == ''){
    alert("Please fill the item")
}else{
    li[count].innerText = `item ${number} : ${add.value}`
    count++
    number++
    add.value = ''
    if(count>3 && number>4){
        count = 0;
        number = 1;
    }
}
})