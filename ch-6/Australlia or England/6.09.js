function compareScores() {
  var australia = parseInt(document.getElementById("australia").value);
  var england = parseInt(document.getElementById("england").value);

  if (australia > england) {
    document.getElementById("output").innerHTML = "Australia";
  } else if (australia < england) {
    document.getElementById("output").innerHTML = "England";
  } else {
    document.getElementById("output").innerHTML = "Tie";
  }
}