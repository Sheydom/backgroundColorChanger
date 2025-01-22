
const options =["Roboto","Comic Neue","Chewy","Pacifico","Fredoka One","Lobster","Caveat"];
const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = `https://fonts.googleapis.com/css2?family=${options.join('&family=')}&display=swap`;
document.head.appendChild(googleFontsLink);

const lbody = document.getElementById("lbody");
const rbody = document.getElementById("rbody");

const telements = document.querySelectorAll("#lbody,#rbody");
telements.forEach((telement)=>telement.style.fontFamily="Roboto");


// for changing all element on the body
// const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, li, a, button, label");
// textElements.forEach((element)=>element.style.fontFamily="Roboto")





const colorbody = document.getElementById("colorbody");
colorbody.style.fontFamily="Roboto"

let body = document.body;
let background = window.getComputedStyle(body);
let backgroundColor = background.backgroundColor;
let newcolor = document.getElementById("newcolor");

const dropdown1 = document.getElementById("dropdown1");
const reset = document.getElementById("reset");
const hexb = document.getElementById("hexb");
const elements = document.querySelectorAll(".button");

const felements = document.querySelectorAll(".fbutton");
const dropdown = document.getElementById("dropdown");
const freset = document.getElementById("freset");
const auto = document.getElementById("auto");
const dropdown2 = document.getElementById("dropdown2");

const color = ["white","yellow","green","blue","red", "orange", "purple", "pink", "black",];
const defaultColor = "white";
const defaultFont = "Roboto";
let previousValue2 = "black";
let previousValue1 = "white";
document.addEventListener("DOMContentLoaded",()=>{
    dropdown2.value="black";
})



document.addEventListener("DOMContentLoaded",()=>{
    dropdown1.value="white";
})




intervalID2 = null;

dropdown2.value ="black";
newcolor.innerText = defaultColor.toUpperCase();
newfont.innerText= defaultFont;   


color.forEach(col=>{
    let co = document.createElement("option");
    co.value=col;
    co.textContent=col;
    dropdown1.appendChild(co);

})



function colorChange (){
    document.body.style.backgroundColor = dropdown1.value;
    currentColor = dropdown1.value.toUpperCase();
    newcolor.innerText = currentColor;
}


//-----------------dropdown eventlistener background color ----------------------


dropdown1.addEventListener("change", ()=>{
    if(dropdown2.value === dropdown1.value){
        alert("Please change background color");
        dropdown1.value = previousValue1;
    }
    else { previousValue1 = dropdown1.value;
        colorChange()}
    });


//----------------------------------color reset-----------------------------------------------------
reset.addEventListener("click", ()=>{document.body.style.backgroundColor = defaultColor;
     newcolor.innerText= defaultColor.toUpperCase();
     dropdown1.value="white"
});


function hchange (){
    const hash="#";
    const hex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let hexvalue ="";
    

    for (let i=0; i<6; i++){
        let index = Math.floor(Math.random()*hex.length);
        hexvalue += hex[index];
    }
    let hexcolor = hash + hexvalue;

    document.body.style.backgroundColor = hexcolor;
    newcolor.innerText = hexcolor;

}

hexb.addEventListener("click",hchange);
//--------------------------------- mouse hover color chonge-----------------------------------------------------------
elements.forEach(element =>{


element.addEventListener("mouseover",()=>{
    
    intervalID = setInterval(() => {
    const hash = "#";
    const hex = "123456789ABCDEF";
    let hexvalue="";

    for (let i=0; i<6; i++){
        let index = Math.floor(Math.random()*hex.length);
        hexvalue += hex.charAt(index);
    }
    let hexcolor = hash + hexvalue;
    element.style.backgroundColor = hexcolor;
                },500);
         });

    element.addEventListener("mouseout", ()=> 
        {clearInterval(intervalID);
        element.style.backgroundColor = "white";
         });
 });


 // ------------function for fontchange via dropdown button ---------------



    
    options.forEach(option=>{
        let opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
        // return opt;
    })







    function fontchange (){
        telements.forEach((telement)=>telement.style.fontFamily=dropdown.value);
        newfont.innerText=dropdown.value;
 };

     dropdown.addEventListener("change",fontchange);



function autofunction(){
    
        clearInterval(intervalID2);
     
    intervalID2=setInterval(()=>{
        const fontc =["Comic Neue","Chewy","Pacifico","Fredoka One","Lobster","Caveat"];
        let fontindex = Math.floor(Math.random()*fontc.length);
        telements.forEach((telement) =>telement.style.fontFamily = fontc[fontindex]);
        },1000);

       
     //------------------------fontreset button----------------------   

    }
 freset.addEventListener("click",()=>{
    clearInterval(intervalID2);
        telements.forEach((telement)=>telement.style.fontFamily=defaultFont);
        newfont.innerText=defaultFont; 
        dropdown.value="Roboto";
        });



    auto.addEventListener("click",autofunction);




//----------------font color dropdown-----------------------------------




color.forEach(col => {
    let nopt = document.createElement("option");
    nopt.value = col;
    nopt.textContent = col;
    dropdown2.appendChild(nopt);
})


dropdown2.addEventListener("change",()=>{
    

    if(dropdown2.value === dropdown1.value){
        alert("Please change font color");
        dropdown2.value = previousValue2;
    }
    else{

    previousValue2=dropdown2.value;
    telements.forEach((telement)=>{
        telement.style.color= dropdown2.value;
    })
    }
});





// fcreset.addEventListener("click", ()=>{document.body.style.backgroundColor = defaultColor;
//     newcolor.innerText= defaultColor.toUpperCase();
//     dropdown1.value="white"
// });