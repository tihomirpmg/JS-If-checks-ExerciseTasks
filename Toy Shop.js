function toyShop(input) {
    let price = Number(input[0]);
    let numPuzzle = Number(input[1]);
    let numTalkingDolls = Number(input[2]);
    let numTeddyBear = Number(input[3]);
    let numMinion = Number(input[4]);
    let numTruck = Number(input[5]);
    let sumPrice = (numPuzzle * 2.60) + (numTalkingDolls * 3) + (numTeddyBear * 4.10) + (numMinion * 8.20) + (numTruck * 2)
    let discount = 0;
    let naem = 0;
    if ((numPuzzle + numTalkingDolls + numTeddyBear + numMinion + numTruck) >= 50) {
        discount = sumPrice * 0.25;
        sumPrice = sumPrice - discount;
        naem = sumPrice * 0.10;
        sumPrice = sumPrice - naem;
    } else {
        naem = sumPrice * 0.10;
        sumPrice = sumPrice - naem;
    }
    if (price <= sumPrice) {
        sumPrice = sumPrice - price;
        console.log(`Yes! ${sumPrice.toFixed(2)} lv left.`)
    } else if (price >= sumPrice){
        price = price - sumPrice;
        console.log(`Not enough money! ${price.toFixed(2)} lv needed.`)
    }
}