const body = document.getElementsByTagName("body")[0];
const main = document.getElementById("main");
body.removeChild(main);

let newHeader = document.createElement("h1");
//document.body.append(newHeader);

newHeader.id = "victory";

newHeader.textContent = "Bryn is the champion";