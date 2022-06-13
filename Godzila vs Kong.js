function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let stats = Number(input[1]);
    let clothes = Number(input[2]);
    let decor = budget * 0.10;
    let clothesPriceSum = stats * clothes;

    if (stats > 150) {
        clothesPriceSum = clothesPriceSum - (clothesPriceSum * 0.10);
    }

    if ((clothesPriceSum + decor) > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(budget - (clothesPriceSum + decor)).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - (clothesPriceSum + decor)).toFixed(2)} leva left.`);
    }
}
godzilaVsKong(["20000",
"120",
"55.5"])

godzilaVsKong(["9587.88",
"222",
"55.68"])

