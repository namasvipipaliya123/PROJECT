function calculateFriendshipDistance() {
  let age = parseInt(document.getElementById("ageInput").value);
  let resultElement = document.getElementById("result");
  let distance;
  
  if (age < 13) {
    distance = "1 Kms";
  } else if (age >= 13 && age < 18) {
    distance = "5 Kms";
  } else if (age >= 18 && age < 30) {
    distance = "10 Kms";
  } else {
    distance = "You can have friends from anywhere";
  }
  document.getElementById("result").innerHTML = "Within " + distance;
}
