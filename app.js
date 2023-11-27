// stop refresh page links 

const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
    })
})

// change tab

function ActiveTab(index){
    document.getElementById("tab1Content").style.display = "none";
    document.getElementById("tab2Content").style.display = "none";
    document.getElementById("tab3Content").style.display = "none";

    document.getElementById("tab" + index + "Content").style.display = "flex";
}

// FAQ

const questions = document.querySelectorAll(".qa-box");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", () => {
        answer[i].classList.toggle("unfold");
        questions[i].classList.toggle("rotate");
    })
}

// mail

let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function validateMail(mail){
    if(regx.test(mail)){
        return true
    } else {
        return false
    }
}

const mail = document.querySelector("#mail");
const mailbox = document.querySelector(".mail-input");
const contact = document.querySelector(".contact-us");

contact.addEventListener("click", () => {
    mailbox.classList.remove("open")
    if (validateMail(mail.value) === false){
        mailbox.classList.add("open");
    }
})

// menu mobile 

var nav = document.getElementById("nav-header")
var mobilelogo = document.querySelector("#white")
var logo = document.querySelector("#dark")
var iconclose = document.querySelector("cross")
var iconhambuger = document.querySelector("#hambuger")
var socailnavcontainer = document.querySelector("RS-header")
var htmltag = document.getElementById("html")
var bodytag = document.getElementById("body")

function showMenu() {
    nav.style.right = '0'
    iconclose.style.display = 'initial'
    iconhambuger.classList.add("active")
    socailnavcontainer.style.display = 'initial'
    mobilelogo.classList.add("active")
    logo.classList.add("active")
    htmltag.classList.add("noscroll")
    htmltag.classList.add("noscroll")
    
    nav.classList.toggle('fade');
}

function hideMenu() {
    nav.style.right = '-100%' 
    iconclose.style.display = 'none'
    iconhamburger.classList.remove("active")
    socailnavcontainer.style.display = 'none'
    mobilelogo.classList.remove("active")
    logo.classList.remove("active")
    htmlTag.classList.remove("noscroll")
    bodyTag.classList.remove("noscroll")
  
    nav.classList.toggle('fade');
  }