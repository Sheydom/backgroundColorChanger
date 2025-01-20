const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, li, a, button, label");
textElements.forEach((element)=>element.style.fontFamily="Roboto, Sans-serif")


let body = document.body;
let background = window.getComputedStyle(body);
let backgroundColor = background.backgroundColor;
let newcolor = document.getElementById("newcolor");
const click = document.getElementById("click");
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
const options =["Comic Neue","Chewy","Pacifico","Fredoka One","Lobster","Caveat"];
intervalID2 = null;


newcolor.innerText = defaultColor.toUpperCase();


function colorChange (){
    const colorindex = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[colorindex];
    currentColor = color[colorindex].toUpperCase();
    newcolor.innerText = currentColor;
}

click.addEventListener("click", colorChange);

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


 // ------------function for fontchange via font button ---------------

     function fontchange (){
    
     let fontindex = Math.floor(Math.random()*options.length);
     textElements.forEach((element)=>element.style.fontFamily=options[fontindex]);
 };

     dropdown.addEventListener("change",fontchange);

    
    options.forEach(option=>{
        let opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    })




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
        });



    auto.addEventListener("click",autofunction);





