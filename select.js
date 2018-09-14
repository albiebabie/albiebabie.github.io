document.addEventListener("DOMContentLoaded", function(event) {
    var options = document.getElementById("js-competition").children;
    for (var i=0; i < options.length; i++) {
        var option = options[i];
        if (option.innerText.length > 35) {
            option.innerText = option.innerText.substring(0, 31) + "...";
        }
    }
});