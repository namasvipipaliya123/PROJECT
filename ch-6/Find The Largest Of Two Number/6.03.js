function findLarge() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;

    if (num1 > num2) {
    document.getElementById("large").innerHTML = num1 + " is the largest";
    } else if (num1 < num2) {
      document.getElementById("large").innerHTML= num2 + " is the largest";
    } else {
      document.getElementById("large").innerHTML = "Both  are equal";
    }
  
}

  
   
