let n = 5;
let linha = "";
let blank = "";
let coluna = "";

for (let i = 0; i < n; i += 1) {
    for (let k = 0; k < n; k += 1) {
        if (k < n) {
            linha += "x";
            coluna = linha;
        } else if (k === n - 1) {
            linha += "*";
            coluna = linha;
        }
        
    }
        console.log(coluna)
        colunha = "";
}
