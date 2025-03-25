function countVowels(str) {
    return str.match(/[aeiouAEIOU]/g)?.length || 0;
}

console.log(countVowels("hello world")); // Output: 3
