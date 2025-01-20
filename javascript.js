const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, li, a, button, label");
textElements.forEach((element)=>element.style.fontFamily="Roboto, Sans-serif")


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

const color = ["yellow","green","blue","red", "orange", "purple", "pink", "black",];
const defaultColor = "white";
const defaultFont = "Roboto, Sans-serif";
const options =["Comic Neue","Chewy","Pacifico","Fredoka One","Lobster","Caveat", "Roboto"];
intervalID2 = null;


newcolor.innerText = defaultColor.toUpperCase();


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

dropdown1.addEventListener("change", colorChange);

reset.addEventListener("click", ()=>{document.body.style.backgroundColor = defaultColor;
     newcolor.innerText= defaultColor.toUpperCase();
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
        return opt;
    })







    function fontchange (){
        textElements.forEach((element)=>element.style.fontFamily=dropdown.value);
        newfont.innerText=dropdown.value;
 };

     dropdown.addEventListener("change",fontchange);



function autofunction(){
    
        clearInterval(intervalID2);
     
    intervalID2=setInterval(()=>{
        const fontc =["Comic Neue","Chewy","Pacifico","Fredoka One","Lobster","Caveat"];
        let fontindex = Math.floor(Math.random()*fontc.length);
        textElements.forEach((element) =>element.style.fontFamily = fontc[fontindex]);
        },1000);

       
        

    }
 freset.addEventListener("click",()=>{
    clearInterval(intervalID2);
        textElements.forEach((element)=>element.style.fontFamily=defaultFont);
        newfont.innerText=defaultFont; 
        });



    auto.addEventListener("click",autofunction);





