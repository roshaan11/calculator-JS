let display =document.getElementById(`display`);

function Display(input){
    display.value+=input;
}
function clear(){
    display.value = " ";
}

function calculate(){
    display.value=eval(display.value);
}

