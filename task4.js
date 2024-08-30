const myScore = 100; //my Score

const friendScore = 80; //my friend score

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("my friend get more than 80. then go for a lunch.");
  } else if (friendScore >= 60) {
    console.log(
      "if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time."
    );
  } else if (friendScore >= 40) {
    console.log(" keep your friend's message unseen.");
  } else {
    console.log("Block My Friend");
  }
} else {
  console.log("if you get less than 80 go to home and sleep and act sad");
}
