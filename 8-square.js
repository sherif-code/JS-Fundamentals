let size = parseInt(process.argv[2]);

if (size % 1 != 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
