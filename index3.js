let pl1 = prompt("Enter the name of player1")
let pl2 = prompt("Enter the name of player2")
let flag =0
let var1 = document.getElementById("b1")
function transform(){
    var1.innerHTML= "X"
}
let b1_btn= document.getElementById("b1")
let b2_btn= document.getElementById("b2")
let b3_btn= document.getElementById("b3")
let b4_btn= document.getElementById("b4")
let b5_btn= document.getElementById("b5")
let b6_btn= document.getElementById("b6")
let b7_btn= document.getElementById("b7")
let b8_btn= document.getElementById("b8")
let b9_btn= document.getElementById("b9")
document.getElementById("p1").innerText += " "+ pl1
document.getElementById("p2").innerText += " "+pl2
function disablee(){
    b1_btn.disabled = true;
    b2_btn.disabled = true;
    b3_btn.disabled = true;
    b4_btn.disabled = true;
    b5_btn.disabled = true;
    b6_btn.disabled = true;
    b7_btn.disabled = true;
    b8_btn.disabled = true;
    b9_btn.disabled = true;

}
function disfun(){
    b1_btn.onclick = null;
    b2_btn.onclick = null;
    b3_btn.onclick = null;
    b4_btn.onclick = null;
    b5_btn.onclick = null;
    b6_btn.onclick = null;
    b7_btn.onclick = null;
    b8_btn.onclick = null;
    b9_btn.onclick = null;
}

function fun(){
    if((b1_btn.innerText==='X')&&(b2_btn.innerText==='X')&&(b3_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1 ;
        b1_btn.style.color = "green";
        b2_btn.style.color = "green";
        b3_btn.style.color = "green";
        b1_btn.onclick = null;
        disfun();
        flag=1;
    }
    else if((b4_btn.innerText==='X')&&(b5_btn.innerText==='X')&&(b6_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b4_btn.style.color = "green";
        b5_btn.style.color = "green";
        b6_btn.style.color = "green";
        disfun();
        flag=1;
    }
    else if((b7_btn.innerText==='X')&&(b8_btn.innerText==='X')&&(b9_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b7_btn.style.color = "green";
        b8_btn.style.color = "green";
        b9_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b1_btn.innerText==='X')&&(b4_btn.innerText==='X')&&(b7_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b1_btn.style.color = "green";
        b4_btn.style.color = "green";
        b7_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b5_btn.innerText==='X')&&(b2_btn.innerText==='X')&&(b8_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b5_btn.style.color = "green";
        b2_btn.style.color = "green";
        b8_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b9_btn.innerText==='X')&&(b6_btn.innerText==='X')&&(b3_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b9_btn.style.color = "green";
        b6_btn.style.color = "green";
        b3_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b1_btn.innerText==='X')&&(b5_btn.innerText==='X')&&(b9_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b1_btn.style.color = "green";
        b5_btn.style.color = "green";
        b9_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b3_btn.innerText==='X')&&(b5_btn.innerText==='X')&&(b7_btn.innerText==='X')){
        document.getElementById("result").innerText += pl1;
        b3_btn.style.color = "green";
        b5_btn.style.color = "green";
        b7_btn.style.color = "green";
        flag=1;
        disfun();
    }



    else if((b1_btn.innerText==='O')&&(b2_btn.innerText==='O')&&(b3_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b1_btn.style.color = "green";
        b2_btn.style.color = "green";
        b3_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b4_btn.innerText==='O')&&(b5_btn.innerText==='O')&&(b6_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b4_btn.style.color = "green";
        b5_btn.style.color = "green";
        b6_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b7_btn.innerText==='O')&&(b8_btn.innerText==='O')&&(b9_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b7_btn.style.color = "green";
        b8_btn.style.color = "green";
        b9_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b1_btn.innerText==='O')&&(b4_btn.innerText==='O')&&(b7_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b1_btn.style.color = "green";
        b4_btn.style.color = "green";
        b7_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b5_btn.innerText==='O')&&(b2_btn.innerText==='O')&&(b8_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b5_btn.style.color = "green";
        b2_btn.style.color = "green";
        b8_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b9_btn.innerText==='O')&&(b6_btn.innerText==='O')&&(b3_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b9_btn.style.color = "green";
        b6_btn.style.color = "green";
        b3_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b1_btn.innerText==='O')&&(b5_btn.innerText==='O')&&(b9_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b1_btn.style.color = "green";
        b5_btn.style.color = "green";
        b9_btn.style.color = "green";
        flag=1;
        disfun();
    }
    else if((b3_btn.innerText==='O')&&(b5_btn.innerText==='O')&&(b7_btn.innerText==='O')){
        document.getElementById("result").innerText += pl2;
        b3_btn.style.color = "green";
        b5_btn.style.color = "green";
        b7_btn.style.color = "green";
        flag=1;
        disfun();
    }
    
}

function fun_1(){
    if(flag===0){
        b1_btn.innerText= "X";
        flag =1;
        b1_btn.onclick = true;
        

    }
    else{
        b1_btn.innerText= "O"
        flag =0;
        b1_btn.onclick = true;
    }
    
}
function fun_2(){
    if(flag===0){
        b2_btn.innerText= "X"
        flag =1
        b2_btn.onclick = true
    }
    else{
        b2_btn.innerText= "O"
        flag =0
        b2_btn.onclick = true
    }
}
function fun_3(){
    if(flag===0){
        b3_btn.innerText= "X"
        flag =1
        b1_btn.onclick = true
    }
    else{
        b3_btn.innerText= "O"
        flag =0
        b3_btn.onclick = true
    }
}
function fun_4(){
    if(flag===0){
        b4_btn.innerText= "X"
        flag =1
        b4_btn.onclick = true
    }
    else{
        b4_btn.innerText= "O"
        flag =0
        b4_btn.onclick = true
    }
}
function fun_5(){
    if(flag===0){
        b5_btn.innerText= "X"
        flag =1
        b5_btn.onclick = true
    }
    else{
        b5_btn.innerText= "O"
        flag =0
        b5_btn.onclick = true
    }
}
function fun_6(){
    if(flag===0){
        b6_btn.innerText= "X"
        flag =1
        b6_btn.onclick = true
    }
    else{
        b6_btn.innerText= "O"
        flag =0
        b6_btn.onclick = true
    }
}
function fun_7(){
    if(flag===0){
        b7_btn.innerText= "X"
        flag =1
        b7_btn.onclick = true
    }
    else{
        b7_btn.innerText= "O"
        flag =0
        b7_btn.onclick = true
    }
}
function fun_8(){
    if(flag===0){
        b8_btn.innerText= "X"
        flag =1
        b8_btn.onclick = true
    }
    else{
        b8_btn.innerText= "O"
        flag =0
        b8_btn.onclick = true
    }
}
function fun_9(){
    if(flag===0){
        b9_btn.innerText= "X"
        b9_btn.onclick = true
        flag =1
    }
    else{
        b9_btn.innerText= "O"
        b9_btn.onclick = true
        flag =0
    }
}