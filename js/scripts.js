$(window).load(function() {
  $('#my-email').html(function(){
    var e = "steven";
    var a = "@";
    var d = "testivate";
    var c = ".com";
    var h = 'mailto:' + e + a + d + c;
    $(this).parent('a').attr('href', h);
    return e + a + d + c;
  });
});
