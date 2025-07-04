function recurringFunction(x) {
    if (x <= 0) {
        return 1;
    } else {
        return 2 * recurringFunction(x - 1);
    }
}
recurringFunction(5); // 32

// This function recursively calculates 2 raised to the power of x.