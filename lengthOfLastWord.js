/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
    let arrOfWords = s.trim().split(" ");
    let lastword = arrOfWords.pop();
        
    return lastword.length;
};
