function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr.length > 1 ? uniqueArr[1] : "No second largest";
}

console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
