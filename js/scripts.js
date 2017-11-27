var temp = function(cel) {
  return cel * (9/5) + 32;
};
var cel = prompt("Enter temperature in Celsius");
alert("Farenheit = " + temp(cel));
