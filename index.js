function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet < 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet >= 2500) {
    return "No can do.";
  }
  return;
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let feedback = "";
  switch (tip) {
    case "generous":
      feedback = "Thank you so much.";
      break;
    case "not as generous":
      feedback = "Thank you.";
      break;
    case "thanks for everything":
      feedback = "Bye.";
      break;
  }
  return feedback;
}

console.log(switchOnCharmFromTip("generous"));
