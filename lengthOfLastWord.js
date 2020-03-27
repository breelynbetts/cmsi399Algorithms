/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arrOfWords = s.split(" ");
    let lastword = arrOfWords[arrOfWords - 1];
    
    return lastword.length();
};
