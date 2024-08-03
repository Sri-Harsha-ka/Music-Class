// initinazation 
const menuEle = document.getElementById("menuEle");
const menuBtn = document.querySelector("#menuBtn");
const midSec = document.getElementById('midSec');
const entireContainer = document.getElementById('entireContainer');
const navBodyCourse = document.getElementById("navBodyCourse");
const homeBtn = document.querySelector("#homeBtn");
const coursesBtn = document.querySelector("#coursesBtn");
const menuEleBtn2 = document.querySelector("#menuEleBtn2");
const menuEleBtn3 = document.getElementById("menuEleBtn3")
const navBodyHome = document.getElementById("navBodyHome");
const menuBodyInstruments = document.getElementById("menuBodyInstruments");
const menuBodyCart = document.getElementById("menuBodyCart");
const instColm1Material1 = document.getElementById("instColm1Material1")
const instColm1Material2 = document.getElementById("instColm1Material2")
const instColm1Material3 = document.getElementById("instColm1Material3")
const instColm1Material4 = document.getElementById("instColm1Material4")
const instColm1Material5 = document.getElementById("instColm1Material5")
const instColm2Material1 = document.getElementById("instColm2Material1")
const instColm2Material2 = document.getElementById("instColm2Material2")
const instColm2Material3 = document.getElementById("instColm2Material3")
const instColm2Material4 = document.getElementById("instColm2Material4")
const instColm2Material5 = document.getElementById("instColm2Material5")
const mat1Clone = instColm1Material1.cloneNode(true)
const mat2Clone = instColm1Material2.cloneNode(true)
const mat3Clone = instColm1Material3.cloneNode(true)
const mat4Clone = instColm1Material4.cloneNode(true)
const mat5Clone = instColm1Material5.cloneNode(true)
const mat6Clone = instColm2Material1.cloneNode(true)
const mat7Clone = instColm2Material2.cloneNode(true)
const mat8Clone = instColm2Material3.cloneNode(true)
const mat9Clone = instColm2Material4.cloneNode(true)
const mat10Clone = instColm2Material5.cloneNode(true)

let cart = 0;


let menuClose=()=>{
    menuEle.classList.add("hidden");
    console.log("the menu is closed");
}

// assining 

midSec.onclick = menuClose;
entireContainer.onclick = menuClose;
navBodyCourse.onclick = menuClose;
menuBodyInstruments.onclick = menuClose;
homeBtn.onclick = homeBtnSwitch;
coursesBtn.onclick = courseBtnSwitch;
menuEleBtn2.onclick = menuEleInstSwitch;
menuEleBtn3.onclick = menuEleCartSwitch;
menuBtn.onclick = react1;

// functions 


function react1(){
    if (menuEle.classList.contains("hidden")) {
    menuEle.classList.remove("hidden");
    console.log("converted into block");
    } else {
    menuEle.classList.add("hidden");
    console.log("converted into none");
    }
}



function homeBtnSwitch(){
    navBodyHome.style.display = "block";
    navBodyCourse.style.display = "none";
    menuBodyInstruments.style.display = "none";
    menuBodyCart.style.display = "none"

    console.log("Home button Clicked");
}

function courseBtnSwitch(){
    navBodyHome.style.display = "none";
    navBodyCourse.style.display = "flex";
    menuBodyInstruments.style.display = "none";
    menuBodyCart.style.display = "none"

    console.log("courses button Clicked");
}

function menuEleInstSwitch(){
    navBodyHome.style.display = "none";
    navBodyCourse.style.display = "none";
    menuBodyInstruments.style.display = "flex";
    menuBodyCart.style.display = "none"
    menuEle.classList.add("hidden");

    console.log("Instruments button Clicked");
}

function menuEleCartSwitch(){

    if(cart===0 || cart===1){
        alert("Add a Item first")
    }
    else{
    navBodyHome.style.display = "none";
    navBodyCourse.style.display = "none";
    menuBodyInstruments.style.display = "none";
    menuBodyCart.style.display = "block"
    menuEle.classList.add("hidden");

    }
    console.log("Cart boutton is clicked")
    
}



function adding1(){
    document.getElementById('menuBodyCart').appendChild(mat1Clone);

    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding2(){
    document.getElementById('menuBodyCart').appendChild(mat2Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding3(){
    document.getElementById('menuBodyCart').appendChild(mat3Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding4(){
    document.getElementById('menuBodyCart').appendChild(mat4Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding5(){
    document.getElementById('menuBodyCart').appendChild(mat5Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding6(){
    document.getElementById('menuBodyCart').appendChild(mat6Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding7(){
    document.getElementById('menuBodyCart').appendChild(mat7Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding8(){
    document.getElementById('menuBodyCart').appendChild(mat8Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding9(){
    document.getElementById('menuBodyCart').appendChild(mat9Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}
function adding10(){
    document.getElementById('menuBodyCart').appendChild(mat10Clone);
    cart++;
    console.log("Item is added");
    alert("Item is added")
}

function notYet(){
    alert("LogIn or SignIn for booking the Course")
}

    // // Dark and Bright Theam 
        let navBar = document.getElementById('navBar');
        let navMenu = document.getElementById('navMenu');
        let theamDb = document.getElementById('theamDb');
        // let homeBtn = document.getElementById('homeBtn');
        // let coursesBtn = document.getElementById('coursesBtn');
        let Text = document.getElementById('Text');
        
        // let entireContainer = document.getElementById('entireContainer');
        let con1 = document.getElementById('con1');
        let con2 = document.getElementById('con2');
        let con3 = document.getElementById('con3');
        let midContent = document.getElementById('midContent');
        

        let con = document.getElementsByClassName('con');

        let sum = 0;

        function react(){
            sum = sum +1;
            console.log(sum)
            if(sum%2 != 0){
            entireContainer.style.background = 'rgb(87 76 56)';
            navBar.style.background = '#16160F';
            navMenu.style.filter = 'invert(100%)';
            homeBtn.style.background = '#6F624A';
            coursesBtn.style.background = '#6F624A';
            theamDb.style.filter = 'invert(100%)';
            midSec.style.opacity = '0.3'
            midSec.style.backgroundImage = 'url("img/darkmain.png")';
            midContent.style.color = 'white';
            Text.style.background = '#6F624A';
            Text.style.borderBottom = ' 3px solid black'
            menuBtn.style.background = "#6F624A"

            con1.style.background = 'burlywood';
            con2.style.background = 'burlywood';
            con3.style.background = 'burlywood';
            // con.style.background = 'burlywood';
            
            console.log("Theam Changed to Dark");
            
            }
            else{
                entireContainer.style.background = 'rgb(255 221 181)';
                navBar.style.background = '#53BD73';
                navMenu.style.filter = 'invert(0%)';
                homeBtn.style.background = '#79dd98';
                coursesBtn.style.background = '#79dd98';
                theamDb.style.filter = 'invert(0%)';
                midSec.style.opacity = '0.6';
                Text.style.background = '#79dd98';
                Text.style.borderBottom = '3px solid #22b14f'
                con1.style.background = 'rgb(255 228 199)';
                con2.style.background = 'rgb(255 228 199)';
                con3.style.background = 'rgb(255 228 199)';
                midSec.style.backgroundImage = 'url("img/personWithVilon.png")';

                console.log("Theam Changed to Bright");
            }
        }
