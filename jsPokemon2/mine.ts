function factorial(n: number) {
    if (n<=1) {
        return 1;
    } else {
        return n* factorial(n-1);
    }
}
console.log(factorial(10))
console.dir(window);