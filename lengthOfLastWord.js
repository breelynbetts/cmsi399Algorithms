/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arrOfWords = s.trim().split(" ");
    let lastword = arrOfWords.pop();
        
    return lastword.length;
};
