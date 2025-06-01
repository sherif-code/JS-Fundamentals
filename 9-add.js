function add(a, b) {
  return a + b;
}

let int1 = parseInt(process.argv[2]);
let int2 = parseInt(process.argv[3]);

if (isNaN(int1) || isNaN(int2)) {
  console.log("NaN");
} else {
  console.log(add(int1, int2));
}
