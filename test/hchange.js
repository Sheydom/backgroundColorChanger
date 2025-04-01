export function hchange() {
    const hash = "#";
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexvalue = "";
  
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hex.length);
      hexvalue += hex[index];
    }
    return  hash + hexvalue;
  
  
  }