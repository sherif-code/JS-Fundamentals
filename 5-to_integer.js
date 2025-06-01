let argVal = parseInt(process.argv[2]);

if (argVal % 1 === 0) {
  console.log("My number:" + " " + argVal);
} else {
  console.log("Not a number");
}
