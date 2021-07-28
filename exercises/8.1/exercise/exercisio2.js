const numeroSorteado = () => {
    let sorteado = Math.floor(Math.random() * 6);
    return sorteado;
}

const verificacao = (numEscolhido, numSorteado) => {
    if (numEscolhido === numSorteado) {
        console.log('got it');
    } else {
        console.log('nope');
    }
}


verificacao(3, numeroSorteado())