//let text = document.getElementsByTagName("p");
let text = document.getElementById("text")
text.innerHTML = "Sagol";

let text2 = document.getElementsByClassName("text2");



let alertBtn = document.getElementById("alert-btn");

// alertBtn.onclick = function(){
//     alert("Qeshey")
// }

// alertBtn.onclick = function(){
//     alert("Gozel")
// }

alertBtn.addEventListener("click",function(){
    alert("Qeshey")
})
alertBtn.addEventListener("click",function(){
    alert("Gozel")
})