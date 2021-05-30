var prev = 0;
$(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    $("nav").children().toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
  });

$("aside > #close").on("click", function(){
  $("aside").addClass("closed");
});

$("nav > #openMenu").on("click", function(){
  $("aside").removeClass("closed");
});