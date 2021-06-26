let n = 5;
let linha = ''
let coluna;

    for (let k = 0; k < n; k += 1){
        linha += "*";
        coluna = linha
        if (k - n < 0) {
            console.log(coluna)
        }
    }
        linha = '';
