function shopping(input) {
    let budget = Number(input[0]);
    let countGpu = Number(input[1]);
    let countCpu = Number(input[2]);
    let countRam = Number(input[3]);

    let gpuPrice = countGpu * 250;
    let cpuPrice = (gpuPrice * 0.35) * countCpu;
    let ramPrice = (gpuPrice * 0.10) * countRam;
    let sumPrice = gpuPrice + cpuPrice + ramPrice;

    if (countGpu >= countCpu) {
        sumPrice = sumPrice - (sumPrice * 0.15);
    }
    if (budget >= sumPrice) {
        console.log(`You have ${Math.abs(budget - sumPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(sumPrice-budget).toFixed(2)} leva more!`);
    }
}
shopping(["900",
    "2",
    "1",
    "3"])
shopping(["920.45",
    "3",
    "1",
    "1"])

