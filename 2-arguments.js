let argumentVal = process.argv.length - 2;

if (argumentVal == 0) {
  console.log("No argument");
} else if (argumentVal == 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
