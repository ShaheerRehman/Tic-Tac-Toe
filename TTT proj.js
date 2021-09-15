var restart = document.querySelector("#b")
var boxes = document.querySelectorAll('td')
function clear(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '';
    }
}

restart.addEventListener('click', clear)

function mark() {
    if (this.textContent == "") {
        this.textContent = "X";
    } else if (this.textContent == "X") {
        this.textContent = "O";
    } else {
        this.textContent = "";
    }
}
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', mark);
}
// document.querySelectorAll("td").forEach(box => {
//         box.addEventListener("click", function () {
//             if (box.textContent == "") {
//                 box.textContent = "X";
//             }else if (box.textContent == "X") {
//                 box.textContent = "O"
//             }else {
//                 box.textContent = ""
//             }
//         })
// })