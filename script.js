const age = 43;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 599;

//deel 1 
if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

//deel 2
if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

//deel 3
if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

// deel 1 - korting
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("De volle mep betalen");
}

// deel 2 - ludieke actie
if (firstName === "Bram" || firstName === "Sarah") {
  console.log("Gratis biertje voor jou!");
} else {
  console.log("De volle mep betalen");
}

// deel 3 - jublileum korting
if (totalAmount > 25 && totalAmount < 50) {
  console.log("Gratis portie (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount < 100){
  console.log("Gratis portie nachos");
} else if (totalAmount >= 100) {
  console.log("Gratis flesje champagne");
} 