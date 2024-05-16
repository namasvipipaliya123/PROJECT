function findLarge() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    let num3 = document.getElementById("c").value;
  
    let large;
  
    if (num1 > num2) {
      if (num1 > num3) {
        large = num1;
      } else {
        large = num3;
      }
    } else {
      if (num2 > num3) {
        large = num2;
      } else {
        large= num3;
      }
    }
  
    document.getElementById("large").innerHTML = "Large: " + large;
}
