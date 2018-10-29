const numberFibonacci = parseInt(prompt("Number Fibonacci ?"));


alert(' Number Fibonacci #1 ' + ' ( ' + numberFibonacci + ' ) ' + ' is ' + fibonacciImplementation(numberFibonacci));
alert(' Number Fibonacci #2 ' + ' ( ' + numberFibonacci + ' ) ' + ' is ' + fibonacciArray(numberFibonacci));
alert(' Number Fibonacci #3 ' + ' ( ' + numberFibonacci + ' ) ' + ' is ' + fibonacciRecursive(numberFibonacci));

function fibonacciImplementation(numberFibonacci) {
    let firstNumber = 1;
    let secondNumber = 1;

    for (let i = 3; i <= numberFibonacci; i++) {

        let nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
    return secondNumber;

}

function fibonacciArray(numberFibonacci) {
    let fibArr = [1, 1];
    for (let i = 2; i < numberFibonacci; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }
    return fibArr.pop();
}

function fibonacciRecursive(numberFibonacci) {
    if (numberFibonacci === 0 || numberFibonacci === 1) {
        return numberFibonacci;
    }

    return fibonacciRecursive(numberFibonacci - 1) + fibonacciRecursive(numberFibonacci - 2);
}
