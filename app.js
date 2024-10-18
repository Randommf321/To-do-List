// Define variables
let input = document.getElementsByTagName('input')[0];
let ol = document.getElementsByTagName('ol')[0];
let addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
    if (input.value == "") {
        alert("Cannot be empty");
    } else {
        let li = document.createElement('li');
        li.innerText = input.value;  
        ol.append(li);  
        input.value = "";
        let delBtn = document.createElement('button');
        delBtn.innerHTML = "<i class='bi bi-trash'></i>";
        delBtn.className = "del"; 
        li.append(delBtn);
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = "<i class='bi bi-check2'></i>";
        checkBtn.className = "check"; 
        li.append(checkBtn);
    }
    saveData();
});

ol.addEventListener('click', (e) => {
    console.log(e.target);
    let target = e.target;
    if (target.className === "bi bi-trash") {
        let liElement = target.closest('li'); 
        liElement.remove(); 
    } else if (target.className === "bi bi-check2") {
        let liElement = target.closest('li');
        liElement.classList.toggle("checked");
    }
    saveData();
});

localStorage.setItem('name', "Gunbileg");
let get = localStorage.getItem('name'); 
console.log(get);

function saveData() {
    localStorage.setItem('todo', ol.innerHTML);
}

function getData() {
    ol.innerHTML = localStorage.getItem('todo');
}

getData();