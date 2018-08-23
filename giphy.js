var GIPHY_KEY = config.GIPHY_KEY;
var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=" + GIPHY_KEY + "&limit=10");

xhr.done(function(data) {
  data.data.forEach((gif, i) => {
    var li = document.createElement("LI");
    var a = document.createElement("A")
    a.textContent = ++i;
    a.href = gif.images.fixed_height.url;
    li.appendChild(a);
    document.getElementById("js-gifs-list").appendChild(li);
  });
});

