/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let stack = [];
    let parens = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    for (let i = 0; i < s.length; i++) {
        if(["[", "(", "{"].includes(s[i])) {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] == parens[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return stack.length == 0;
    
};
