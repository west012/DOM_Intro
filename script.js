// Append all elements

let body = document.querySelector('body');
body.setAttribute('style', 'colo: green');


let newButton = document.createElement('button');
body.appendChild(newButton);
newButton.innerHTML = "ADD";

let i = 0;
function addButtonClicked(){
    // console.log('hit');
    // alert("Good job finding the button!")

    let newHeader = document.createElement('h2');
    newHeader.innerHTML ="Jem Necklace";
    newHeader.setAttribute('id',i);
    body.appendChild(newHeader);
    console.log(newHeader);
}
newButton.addEventListener('click', addButtonClicked);


let newButton2 = document.createElement('button');
body.appendChild(newButton2);
newButton2.innerHTML = "REMOVE";

function removedButtonClicked(){
    // console.log('hit');
    // alert("Good job finding the button!")

    let newHeader = document.createElement('h2');
    newHeader.innerHTML ="Jem Necklace";
    body.appendChild(newHeader);
}
newButton2.addEventListener('click', removedButtonClicked);
console.log(body);