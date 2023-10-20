function message(msg){
    document.getElementById('output').innerHTML = msg + " event";
}

function closeMe(){
    element = document.getElementById('demo');
    element.className ="closed";
}

function openMe(){
    element = document.getElementById('demo');
    element.className ="open";
}

function showProperties(element) {
    document.getElementById('message').innerHTML = element.alt;
}

function showGuide() {
    document.getElementById('message').innerHTML = "Hover on an image";
}