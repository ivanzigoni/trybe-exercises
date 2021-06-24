let salarioBruto = 1500;
let salarioBase = 0;
let salarioInss;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    let aliquotaInss = salarioBruto / 100 * 8;
    salarioBase = salarioBruto - aliquotaInss;
        if (salarioBase <= 1903.98) {
            salarioLiquido = salarioBase;
        }
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    let aliquotaInss = salarioBruto / 100 * 9
    salarioBase = salarioBruto - aliquotaInss;
        if (salarioBase >= 1903.99 && salarioBase <= 2826.85) {
            let aliquotaIr = salarioBase / 100 * 7.5 - 142.80;
            salarioLiquido = salarioBase - aliquotaIr;
        }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    let aliquotaInss = salarioBruto / 100 * 11;
    salarioBase = salarioBruto - aliquotaInss;
        if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
            let aliquotaIr = salarioBase / 100 * 15 - 354.80;
            salarioLiquido = salarioBase - aliquotaIr;
        }
} else if (salarioBruto >= 5189.82) {
    let aliquotaInss = 570.88;
    salarioBase = salarioBruto - aliquotaInss;
        if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
            let aliquotaIr = salarioBase / 100 * 22.5 - 636.13;
            salarioLiquido = salarioBase - aliquotaIr;
        } else if (salarioBase >= 4664.69) {
            let aliquotaIr = salarioBase / 100 * 27.5 - 869.36;
            salarioLiquido = salarioBase - aliquotaIr;
        }
}

console.log(salarioLiquido)

