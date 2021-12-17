//Calculate Tip
function calculateTip() {
  var bill_amount = document.getElementById("bill_amount").value;
  var service_rate = document.getElementById("service_rate").value;
  var people_amount = document.getElementById("people_amount").value;

  //validate input
  if (bill_amount === "" || service_rate == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (people_amount === "" || people_amount <= 1) {
    people_amount = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (bill_amount * service_rate) / people_amount;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};