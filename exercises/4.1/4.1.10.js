let rawCostOfProduction = 0;
let taxes = rawCostOfProduction / 100 * 20;
let costOfProduction = rawCostOfProduction + taxes;
let sellingPrice = 5000;
let soldProducts = 1000;
let profit = sellingPrice * soldProducts - costOfProduction;

if (rawCostOfProduction === 0 || costOfProduction === 0 || sellingPrice === 0){
    console.log('error')
} else {
    console.log("R$" + profit);
}
