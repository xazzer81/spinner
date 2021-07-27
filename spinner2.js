let chars = ['|', '/', '-', '\\', '|', '/', '-' ,'\\', '|'];
let delay = 0;

for (const char of chars){
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay += 200);
}