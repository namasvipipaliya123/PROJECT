function OddEven() {
    let number = document.getElementById("inp").value;
  
    if (number % 2==0) {
      document.getElementById("result").innerHTML = "It's An Even Number!!";
    } else {
      document.getElementById("result").innerHTML = "It's An Odd Number!!";
    }
  }