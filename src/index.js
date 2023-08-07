module.exports = function toReadable(number) {
    const obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    let res = String(number).split("");
    let result = "";
    if (number <= 20) {
        result = obj[number];
    } else if ((number <= 99) & (number > 20)) {
        if (number % 10 == 0) {
            result = `${obj[number]}`;
        } else {
            result = `${obj[res[0] * 10]}` + ` ${obj[res[1]]}`;
        }
    } else if (Math.round(number / 100) >= 1) {
        if (res[1] + res[2] <= 20) {
            result =
                `${obj[res[0]]} ` +
                `${
                    Number(res[1] + res[2]) / 10 === 0
                        ? "hundred"
                        : "hundred " + obj[Number(res[1] + res[2])]
                }`;
        } else {
            result =
                `${obj[res[0]]} ` +
                "hundred" +
                `${
                    Number(res[1] + res[2]) % 10 === 0
                        ? " " + obj[Number(res[1] + res[2])]
                        : " " + obj[res[1] * 10] + " " + obj[res[2]]
                }`;
        }
    }

    return result;
};
