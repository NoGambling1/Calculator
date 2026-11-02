let strToEval = "";
let equations = [];
function evalInput() {
    strToEval = document.getElementById("inputText").value;

    output(eval(strToEval));
    equations.add(strToEval);
    alert(equations);
    sessionStorage.setItem("stored", equations)}
    document.getElementById("testDiv").innerText = getMem();


function output(text) {
    let divToOutput = document.getElementById("screenThing");
    divToOutput.innerText = text;
 
}

function buttonHandler(c) {
    strToEval.add(c);
    output(strToEval);
}

function inputUp() {}
function inputDown() {}
function inputLeft() {
}
function inputRight() {

}



function getMem() {
    return sessionStorage.getItem("stored");

}

function pageLoad() {
    const stored = sessionStorage.getItem("stored");
    if (stored) {
        equations = JSON.parse(stored);

    } else {
        equations = [];
        sessionStorage.setItem("stored", JSON.stringify(equations));
    }
}