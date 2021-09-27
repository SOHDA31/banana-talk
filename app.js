var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerHTML = "HI! Write something here";


function clickHandler() {
    outputDiv.innerText = "gfeiyfygigifughuguh " + textInput.value;
};

btnTranslate.addEventListener("click", clickHandler)