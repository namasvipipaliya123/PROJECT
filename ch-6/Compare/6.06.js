function performOperations() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let num3 = parseInt(document.getElementById("num3").value);

  let firstResult = num1 > num2;
  document.getElementById("output").innerHTML = "First Comparison: " + firstResult;

  num1 += num3;

  let secondResult = num1 > num2;
  document.getElementById("output").innerHTML  += "<br>Second Comparison: " + secondResult;
}
