document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("js-burger-icon").addEventListener("click", function() {
        document.getElementById("js-nav").classList.toggle("menu--mobile--hidden")
    });
});