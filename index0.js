let greet = document.getElementById("enter");
let box = document.getElementById("boxx");

let inpu = document.getElementById("input");
let sub = document.getElementById("submit");

function getval(){
    
    const val = inpu.value;
    console.log(val);
    greet.innerText = "HELLO! " + val + "😎";
    sub.innerHTML = "<a href='index.html'>ENTER</a>";
    box.innerHTML = "";
}
