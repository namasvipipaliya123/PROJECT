function checkDivisibility() {
  let number = parseInt(document.getElementById("number").value);
  if (number % 3 === 0) {
    document.getElementById("output").innerHTML = "Yes";
  } else {
    document.getElementById("output").innerHTML = "No";
  }
}
