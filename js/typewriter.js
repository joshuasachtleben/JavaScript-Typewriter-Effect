var elements = document.getElementsByTagName("*");
var count = elements.length;
for (var i = 0; i < count; i++) {
    if(elements[i].className.indexOf("typewriter") > -1) {
        alert("Typewriter class found!");
    }
}