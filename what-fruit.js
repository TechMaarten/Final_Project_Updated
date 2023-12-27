function calculateFruit() {

    let watermelonCount = 0;
    let durianCount = 0;
    let bananaCount = 0;
    let orangesCount = 0;
    let pineappleCount = 0;
    let grapesCount = 0;

    let form = document.getElementById('fruitForm');
    let selected = form.querySelectorAll('input[type="radio"]:checked');

    for (let i = 0; i < selected.length; i++) {

        if (selected[i].value === "Watermelon") {
            watermelonCount++;
        } else if (selected[i].value === "Durian") {
            durianCount++;
        } else if (selected[i].value === "Banana") {
            bananaCount++;
        } else if (selected[i].value === "Oranges") {
            orangesCount++;
        } else if (selected[i].value === "Pineapple") {
            pineappleCount++;
        } else if (selected[i].value === "Grapes") {
            grapesCount++;
        }
    }


    let winnerCount = Math.max(watermelonCount, durianCount, bananaCount, orangesCount, pineappleCount, grapesCount);
    let winnerFruit = "";

    if (winnerCount === watermelonCount) {
        winnerFruit = "Watermelon";
    } else if (winnerCount === durianCount) {
        winnerFruit = "Durian";
    } else if (winnerCount === bananaCount) {
        winnerFruit = "Banana";
    } else if (winnerCount === orangesCount) {
        winnerFruit = "Oranges";
    } else if (winnerCount === pineappleCount) {
        winnerFruit = "Pineapple";
    } else if (winnerCount === grapesCount) {
        winnerFruit = "Grapes";
    }


    document.getElementById("result").textContent = "You are a " + winnerFruit + "!";
}