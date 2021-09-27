var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerHTML = "Your output sentence in banana language will appear here";

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server! try again after sometime.")
}




function clickHandler() {
//    outputDiv.innerText = "gfeiyfygigifughuguh " + textInput.value;

    var inputText = textInput.value; //taking the input

//calling server for processing
    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        })
        .catch(errorHandler)


};

btnTranslate.addEventListener("click", clickHandler)