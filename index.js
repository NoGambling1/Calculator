let strToEval = "";
let equations = [];
let currentMem = 0;
function evalInput() {
    if (!strToEval) {
        strToEval = document.getElementById("inputText").value;
        document.getElementById("inputText").innerText = "Input your equation";
    }
    output(eval(strToEval));
    equations.push(strToEval);
    sessionStorage.setItem("stored", equations)
    strToEval = "";
}
//h


function output(text) {
    let divToOutput = document.getElementById("screenThing");
    if (text === undefined  ) {
        text = "N/A"
    }
    divToOutput.innerText = text;
 
}

function buttonHandler(c) {
    strToEval += c;
    output(strToEval);
}

function inputUp() {
    output(equations[currentMem--])
}
function inputDown() {
    output(equations[currentMem++])
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