var GIPHY_KEY = config.GIPHY_KEY;
var xhr = $.get("https://api.giphy.com/v1/gifs/trending?api_key=" + GIPHY_KEY + "&limit=10");

xhr.done(function(data) {
  data.data.forEach((gif, i) => {
    var li = document.createElement("LI");
    var img = document.createElement("IMG")
    img.textContent = ++i;
    img.src = gif.images.fixed_width_downsampled.url;
    li.appendChild(img);
    document.getElementById("js-gifs-list").appendChild(li);
  });
});

