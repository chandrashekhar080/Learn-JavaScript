
const s = ["R","R","R","U","D"];

function getMaxDeletions(s) {
    // Write your code here
    
    for(let i = 0;i < s.length;i++){
        for(let j = 1;j < s.length;j++){
            if(s[i] == s[j]){
                console.log(parseInt(i));
            } else {
                console.log(parseInt("No deletions"));
            };
        }

    };
}

console.log(getMaxDeletions(s));