function performOperations() {
  let  num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let result1 = num1 > num2;
  document.getElementById("output").innerHTML= result1 ? "true" : "false";

  let result2 = num1 < num2;
  document.getElementById("output").innerHTML += "<br>" + (result2 ? "true" : "false");

  let result3 = num1 === num2;
  document.getElementById("output").innerHTML += "<br>" + (result3 ? "true" : "false");
}
