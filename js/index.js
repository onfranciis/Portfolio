
//Typewriter Effect
const typeWriter = document.getElementById('typewriter_text');
const text = 'I am a web developer';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
//End Of Typewriter


//Modal Assignment
var closeBtn1 = document.querySelector("#modal_contact_close");
var closeBtn2 = document.querySelector("#modal_connect_close");
var closeBtn3 = document.querySelector("#modal_credit_close");
var contactBtn = document.querySelector("#nav_btn_contact");
var connectBtn = document.querySelector("#nav_btn_connect");
var creditBtn = document.querySelector("#nav_btn_credit");
var modalContact = document.querySelector("#modal1");
var modalConnect = document.querySelector("#modal2");
var modalCredit = document.querySelector("#modal3");
var nav1 = document.getElementById("nav");
var nav2 = document.getElementById("nav_btns");
var wrap = document.getElementById("wrap");
var body1 = document.getElementById("body1");
var body2 = document.getElementById("body2");
var body3 = document.getElementById("body3");
var body4 = document.getElementById("body4");
//End Of Modal Assignment


//Contact Section
contactBtn.addEventListener("click", openContact1);
closeBtn1.addEventListener("click", closeContact1);
//wrap.addEventListener("click", closeContact1);
body2.addEventListener("click", closeContact1);

function closeContact1(){
    modalContact.style="display: flex; animation-name: go;";
    setTimeout(closeContact2, 200)
}

function openContact1(){
    modalContact.style="display: flex; animation-name: drop;";
    //wrap.style="display: block;";
    nav1.style="filter: blur(5px) opacity(0.5);";
    body1.style="filter: blur(10px) opacity(0.5);";
    body2.style="display: block; filter: blur(5px); z-index: 0;";

}

function openContact2(){
    modal.style="display: flex;"
}

function closeContact2(){
    modalContact.style="display: none;"
    //wrap.style="display: none;";
    nav1.style="filter: blur(0px) opacity(1);";
    body1.style="filter: blur(0px) opacity(1);";
    body2.style="display: block; filter: blur(0px); z-index:-1";
}

//End Of Contact Section


//Connect Section

connectBtn.addEventListener("click", openConnect1);
closeBtn2.addEventListener("click", closeConnect1);
//wrap.addEventListener("click", closeContact1);
body3.addEventListener("click", closeConnect1);

function closeConnect1(){
    modalConnect.style="display: flex; animation-name: go;";
    setTimeout(closeConnect2, 200)
}

function openConnect1(){
    modalConnect.style="display: flex; animation-name: drop;";
    //wrap.style="display: block;";
    nav1.style="filter: blur(5px) opacity(0.5);";
    body1.style="filter: blur(10px) opacity(0.5);";
    body3.style="display: block; filter: blur(5px); z-index: 0;";

}

function openConnect2(){
    modal.style="display: flex;"
}

function closeConnect2(){
    modalConnect.style="display: none;"
    //wrap.style="display: none;";
    nav1.style="filter: blur(0px) opacity(1);";
    body1.style="filter: blur(0px) opacity(1);";
    body3.style="display: block; filter: blur(0px); z-index:-1";
}

//End Of Connect Section

//Credit Section

creditBtn.addEventListener("click", openCredit1);
closeBtn3.addEventListener("click", closeCredit1);
//wrap.addEventListener("click", closeContact1);
body4.addEventListener("click", closeCredit1);

function closeCredit1(){
    modalCredit.style="display: flex; animation-name: go;";
    setTimeout(closeCredit2, 200)
}

function openCredit1(){
    modalCredit.style="display: flex; animation-name: drop;";
    //wrap.style="display: block;";
    nav1.style="filter: blur(5px) opacity(0.5);";
    body1.style="filter: blur(10px) opacity(0.5);";
    body4.style="display: block; filter: blur(5px); z-index: 0;";

}

function openCredit2(){
    modal.style="display: flex;"
}

function closeCredit2(){
    modalCredit.style="display: none;"
    //wrap.style="display: none;";
    nav1.style="filter: blur(0px) opacity(1);";
    body1.style="filter: blur(0px) opacity(1);";
    body4.style="display: block; filter: blur(0px); z-index:-1";
}

//End Of Credit Section


