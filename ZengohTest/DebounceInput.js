function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const logInput = debounce((text) => console.log("Input:", text), 300);
logInput("Hello");
