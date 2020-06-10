// Append all elements

let body = document.querySelector('body');
body.setAttribute('style', 'colo: green');



let i = 0;
let newButton = document.createElement('button');
let newButton2 = document.createElement('button');

body.appendChild(newButton);
body.appendChild(newButton2);

newButton.innerHTML = "ADD";
newButton2.innerHTML = "REMOVE";

newButton.addEventListener('click', addButtonClicked);
newButton2.addEventListener('click', removedButtonClicked);

function addButtonClicked(){
    // console.log('hit');
    // alert("Good job finding the button!")

    let newHeader = document.createElement('h2');
    newHeader.innerHTML ="Jem Necklace";
    newHeader.setAttribute('id',i);
    body.appendChild(newHeader);
    i++;
    // console.log(newHeader);
    
}
function removedButtonClicked(){
    let toDelete = document.getElementById(i-1);

    if(toDelete !== null){
        console.log(toDelete);

    
        // alert("Good job finding the button!")
        // Find variable  with id
        body.removeChild(toDelete);
        // id goes back to i-1 after deleting child node
        i--;
    }else{
        window.alert("Don't be daft.")
    }
    
}

// console.log(body);