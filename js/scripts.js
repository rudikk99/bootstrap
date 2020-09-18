
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").on("click",function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(function () {

    // Attach Button click event listener 
   $("#loginButton").on("click", function(){

        // show Modal
        $('#loginModal').modal('show');
   });
});

$(function () {

    // Attach Button click event listener 
   $("#reserveButton").on("click", function(){

        // show Modal
        $('#reserveModal').modal('show');
   });
});

/*
$(function() {
    $("#loginButton").on("click", function() {
        $("#loginModal").dialog("open");
    });
});

$(function() {
    $("#registerButton").on("click", function() {
        $("#registerModal").dialog("open");
    });
});
var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginButton");
btn.onclick = function() {
    modal.style.display = "block";
}
*/
//<button id="myBtn">Open Modal</button>
//<div id="myModal" class="modal">
//     var modal = document.getElementById("loginModal");
//  var btn = document.getElementById("loginButton");
//var span = document.getElementsByClassName("close")[0];
//  btn.onclick = function() {
//      modal.style.display = "block";
//    }



// -----------
/*function openFormReserveButton() {
    document.getElementById("reserveModal").style.display = "block";
}*/

// -----------
/* $(function() {
$("#loginButton").on("click", function() {
    $("#loginModal").dialog("open");
}); });
*/


// opens login & reserve window .
//$(function() {
//    $("#loginButton").on(function(){
//        $("#loginModal").modal('show') })
//});
// loginButton  >> id="loginModal"  reserveButton. >>> id="reserveModal" 
// <button type="button" id="reserveButton" role="button" class="btn btn-lg btn-info">Reserve Campsite</button>  
