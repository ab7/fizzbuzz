$(function() {
  // create answer
  function makeAnswer(x) {
    return $('body').append("<div class='num'>" + x + "</div>");   
  }
  
  // validate and output fizzbuzz
  $('#howMany').keypress(function(e) {
    if (e.which === 13) {
      var num = $(this).val();
      if (Number(num) <= 300) {
        $('body').find('.num').remove();
        for (i = 1; i <= num; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            makeAnswer("FizzBuzz");
          } else if (i % 5 === 0) {
            makeAnswer("Buzz");
          } else if (i % 3 === 0) {
            makeAnswer("Fizz")
          } else {
            makeAnswer(i);
          }
        }
      } else {
        $('#error').fadeIn().finish().fadeOut(2000);
      }
    } 
  }); 
})