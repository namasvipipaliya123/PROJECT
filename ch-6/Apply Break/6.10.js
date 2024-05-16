function calculateSpeed() {
  let distance = parseFloat(document.getElementById("distance").value);
  let time = parseFloat(document.getElementById("time").value);
  let speed = distance / time;

  if (speed > 40) {
    document.getElementById("output").innerHTML = "Apply Brake";
  } else {
    document.getElementById("output").innerHTML = "Keep Going";
  }
}
