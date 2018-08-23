var GIPHY_KEY = config.GIPHY_KEY;
var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=" + GIPHY_KEY + "&limit=10"); 
            xhr.done(function(data) { console.log("hello your data is here...", data); });