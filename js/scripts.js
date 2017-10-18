// Back End
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };
  var add = function(number1, number2) {
    return number1 + number2;
  };
  var remainder = function(number1, number2) {
    return number1 % number2;
  };


// Front End
$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
  event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
  event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
  event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});







// var popup = function(whatToSay) {alert(whatToSay);};
// var threetimes = function threetimes(number1, number2, number3) {return number1 * number2 * number3;};
