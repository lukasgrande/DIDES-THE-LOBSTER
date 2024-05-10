
function changeText() {
    var element = document.getElementById("changeable-text"); 
    if (element.innerHTML === "Klick mich!") {
        element.innerHTML = "Danke fürs Klicken!";
    } else {
        element.innerHTML = "Klick mich!";
    }
}


document.getElementById("changeable-text").addEventListener("click", changeText);
