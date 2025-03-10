function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Example usage:
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result); // Output: [2, 4, 6]
