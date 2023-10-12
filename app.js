// Buttonların Seçilmesi
const addButton = document.querySelector("#add");
const delButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

//Input field'lerin seçilmesi
const addKeyInp = document.querySelector("#addkey");
const addValueInp = document.querySelector("#addvalue");
const deleteKeyInp = document.querySelector("#deletekey");
console.log(deleteKeyInp);

//Inputların Session Storage'ye gönderilmesi

    //Butonlara event listener eklenmesi.
addButton.addEventListener("click",addItemFunc);
delButton.addEventListener("click",delItemFunc);
clearButton.addEventListener("click",clearItemsFunc);

    //Event listener fonksiyonlarının yazılması.

function addItemFunc(){
    sessionStorage.setItem(addKeyInp.value,addValueInp.value);
}
function delItemFunc(){
    sessionStorage.removeItem(deleteKeyInp.value);
}
function clearItemsFunc(){
    sessionStorage.clear();
}

