function lunchBreak(input) {
    let serialName = input[0];
    let episodeLength = Number(input[1]);
    let restLength = Number(input[2]);

    let lunchTime = restLength * 0.125;
    let restTime = restLength * 0.25;
    let finalRestTimeLeft = restLength - lunchTime - restTime;

    if (finalRestTimeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(finalRestTimeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLength - finalRestTimeLeft)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones",
    "60",
    "96"])
lunchBreak(["Teen Wolf",
    "48",
    "60"])
