// $("a").attr("href","https://www.yahoo.com");


// $("h1").click(function(){
//     $("h1").css("color","purple")
// })

// for (var i=0;i<6;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color","red");
// })


// $("input").keypress(function(e){
// console.log(e.key);
// });

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

// $("button").on("click",function(){
//      $("h1").css("color","aqua");
// })


$("button").on("click",function(){
     $("h1").slideUp().slideDown().animate({opacity:0.5});
})