function checkNumbers() {

    let numbers = [
        { value: 4 },
        { value: 7 },
        { value: 10 },
        { value: 3 },
        { value: 8 }
    ];

    let evenSum = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i].value % 2 === 0) {
            console.log(numbers[i].value + " is even");
            evenSum += numbers[i].value;
        } else {
            console.log(numbers[i].value + " is odd");
        }

    }

    console.log("Sum of even numbers:", evenSum);
}

checkNumbers();