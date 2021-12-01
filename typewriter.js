const sentence = "hello there from lighthouse labs";
let delay = 1000;
for (const char of sentence) {
  // print the char here
  setTimeout(() => {
    process.stdout.write(char + '\n');
  }, delay);
  delay += 50;
}
