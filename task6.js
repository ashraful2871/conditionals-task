// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

var age = 50;
var fullPrice = 800;
var isStudent = false;

if (age < 10) {
  console.log("Your Price is free");
} else if (isStudent) {
  console.log("Your ticket price is half", fullPrice - fullPrice * 0.5);
} else if (age >= 60) {
  console.log("gets a 15% discount", fullPrice - fullPrice * 0.15);
} else {
  console.log("you pay full price");
}
