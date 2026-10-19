let evalButton = document.getElementById("evaluateButton");
// evalButton.addEventListener('click', (e) => {
//     let text = document.getElementById('inputText').value;
//     output(text);
//     alert(text);
//     document.title=text;
// //hi
// })
evalButton.addEventListener('click', (e) => {
    let inputVal = document.getElementById("inputText").value;
    document.title=inputVal;
//hi
})
// function evaluate() {
//     document.title=document.getElementById("inputText").value;
//
// }

function output(text) {
    let div = document.getElementById('displayDiv');
    div.innerText=text;
}