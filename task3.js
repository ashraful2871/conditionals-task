//grade calculator

const score = 73;
if (score >= 90 && score <= 100) {
  console.log('Your Grade is "A"');
} else if (score >= 80 && score <= 89) {
  console.log('Your score is "B"');
} else if (score >= 70 && score <= 79) {
  console.log('Your score is "C"');
} else if (score >= 60 && score <= 69) {
  console.log('Your score is "D"');
} else if (score >= 0 && score <= 59) {
  console.log('Your score is "F"');
} else {
  console.log("please enter your score");
}
