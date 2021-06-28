let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'OIJEOSAJEOIJSAEIOSAOEJOA', 'Cairo', 'Joana'];
let biggest = "";

let biggestName = () => {
    for (let i = 0; i < nomes.length; i += 1){
        if (nomes[i].length > biggest.length) {
            biggest = nomes[i]
        }
    }
}

biggestName()
console.log(biggest)