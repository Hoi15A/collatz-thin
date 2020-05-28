function printCollatz(startIndex, endIndex, stepCount, isExactStepCount) {
    for (let i = startIndex; i < endIndex; i++) {
        let n = i;
        let counter = 0;
        while(n > 1) {
            n = (n % 2 === 0) ? (n / 2) : (3 * n + 1);
            counter++;
        }
        if (isExactStepCount) {
            if (counter === stepCount) {
                console.log("Die Zahl " + i + " brauchte insgesamt: " + counter + " Schritte.");
                break;
            }
        } else if (counter < stepCount) {
            console.log("Die Zahl " + i + " brauchte insgesamt: " + counter + " Schritte.");
        }
    }
}

printCollatz(101, 1e6, 12, false);
console.log("Group Nr")
printCollatz(1, 1e6, 75, true);