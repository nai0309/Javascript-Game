function gameSelected(game) {
    var url = "";
    switch (game) {
        case "numGuess":
            url = "numGuess.html"
            break;
    }
    // $.get(url, function (data) {
    //     document.getElementById("gameShow").innerHTML = data;
    // })
    $.ajax({
        url: url,
        type: "get",
        async: false,
        success: function (data) { 
            document.getElementById("gameShow").innerHTML = data;
        },
    })


}

// function load_js() {
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = '../thirdparty/Metro-UI-CSS-master/docs/js/metro.min.js';
//     head.appendChild(script);
// }