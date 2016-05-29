//INIT

$(document).ready(function(){
  $('.mdl-tabs').hide();
});

$('.more').on('click', function(){
  var more = $(this).siblings('div');
  var btn = $(this).children('i');

  more.toggle("fast", function(){
    if(btn.text() == "expand_more"){
      btn.text("expand_less");
      console.log(btn.text());
    } else {
      btn.text("expand_more");
      console.log(btn.text());
    }
  });
});
