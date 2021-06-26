let n = 5; // you can take input from prompt or change the value
let string = "";
for (let i = 1; i <= n; i++) { // external loop
  for (let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  string += "\n";
}