function createFibonacci(n) {
    var fibonacciArr = [0,1];
    for (var i=2; i<=n; i++){
        fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
    }
    return fibonacciArr.slice(0,n);
}

