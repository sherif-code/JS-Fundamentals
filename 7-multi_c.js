/*let x = parseInt(process.argv[2])

if(x%1 != 0){
    console.log("Missing number of occurrences")
} else {
    Array(x).fill().forEach(() => {
        console.log("C is fun");
    })
}*/

let x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
