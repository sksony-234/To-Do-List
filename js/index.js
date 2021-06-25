const addButton = document.querySelector(".input-box button");
let input = document.querySelector(".input-box input");
const container = document.querySelector(".list-items");
const delAll = document.querySelector('.clr-all button')

class item{
    constructor(itemValue){
        // Creat the item div 
        this.createDiv(itemValue);
    }

    createDiv(itemValue){
        let input = document.createElement("input");
        input.value = itemValue;
        input.disabled = true;
        input.classList.add("item-input");
        input.type = "text";

        let itemBox = document.createElement("div");
        itemBox.classList.add("item");

        let editButton = document.createElement("button");
        editButton.innerHTML = "<i class='fas fa-pencil-alt'></i>"
        editButton.classList.add('editButton');
        
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "<i class='far fa-trash-alt'></i>"
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }
    
    edit(input){
        input.disabled = !(input.disabled);
    }
    
    remove(item){
        container.removeChild(item);
    }
}


function append(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
};

addButton.addEventListener('click', ()=>{
    if(input.value == ""){
        alert("You must have to enter some content");
    }
    else{
        append();
    }
});

window.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    append();
  }
});