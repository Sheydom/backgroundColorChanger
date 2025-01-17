const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, li, a");
textElements.forEach((element)=>element.style.fontFamily="Roboto", "sans-serif")


let body = document.body;
let background = window.getComputedStyle(body);
let backgroundColor = background.backgroundColor;
let newcolor = document.getElementById("newcolor");
const click = document.getElementById("click");
const reset = document.getElementById("reset");
const hexb = document.getElementById("hexb");
const elements = document.querySelectorAll(".button");

const color = ["yellow","green","blue","red", "orange", "purple", "pink", "black",];
const defaultColor = "white";


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
    let intervalID;


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




