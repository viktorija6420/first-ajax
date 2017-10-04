document.addEventListener("DOMContentLoaded", function() {


  var button = document.querySelector('.a');
  button.addEventListener('click', function(){
    $.ajax({
      method:'GET',
      url :'http://first-ajax-api.herokuapp.com/',
      data: {},
      dataType:'text',
    }).done(function(data){
      console.log("It worked!");
    });
  });
  var section_a = document.querySelector("#step3456");
  var button = document.querySelector('.aa');
  button.addEventListener('click', function(){
    $.ajax({
      method:'GET',
      url :'http://first-ajax-api.herokuapp.com/ping',
      dataType:'text',
    }).fail(function(){
    (section_a).append("Sorry!Next time it will be better.");
    }).done(function (responseData) {
     console.log("Yeeeeyyyyyy");
    }).fail(function () {
     console.log('That did NOT go well.');
    }).always(function () {
      console.log('All I know is, it\'s over.');
    });
  });

  var section_b = document.querySelector("#step7")
  var button_a = document.querySelector('.aaa');
  button_a.addEventListener('click', function(){
    $.ajax({
      method:'GET',
      url :'http://first-ajax-api.herokuapp.com/count',
      dataType:'text',
    }).done(function(){
    (section_b).append("Counting");
  });
  });
  // Modify the request to send a timezone as a piece of data, for example:
  // 'Europe/Sofia'. On this one. Check how the timezone thing is supposed
  //to look like.

  var section_c = document.querySelector("#step8");
  var button_c = document.querySelector('.aaaa');
  button_c.addEventListener('click', function(){
    $.ajax({
      method:'GET',
      url :'http://first-ajax-api.herokuapp.com/time',
      dataType:'Europe/Sofia',
  }).done(function(){
    (section_c).append('Europe/Sofia');
  });
  });

  var section_d = document.querySelector("#step9");
  var list = document.querySelector('#list');
  var button_d = document.querySelector('.b');
  button_d.addEventListener('click', function(){
    $.ajax({
      method:'GET',
      url :'http://first-ajax-api.herokuapp.com/a_car',
      dataType:'html',
  }).done(function(){
    (list).append('Ajax');
  });
});



});
