for (let i = 0; i <= 50; i++) {
    console.log(i);
}

let i = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

let g = 1;

do {
    console.log(g);
    g++;
} while (g <= 30);

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    }
}

const currentDay = new Date().getDay();

switch (currentDay) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}