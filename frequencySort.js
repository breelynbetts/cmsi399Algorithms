/**
 * Goal: Given a string, sort it in decreasing order based on the frequency of characters.
 * @param {string} s
 * @return {string}
 */
let frequencySort = function(s) {
    let charFreq = {};
    let arrOfStr = s.split('');
    arrOfStr.forEach(char => charFreq[char] ? 
                     charFreq[char] += 1 : charFreq[char] = 1);
    let sortedKeys = Object.entries(charFreq).sort((c1, c2) => c2[1] - c1[1]);
    sortedKeys.forEach((arr) => {
        arr[0] = arr[0].repeat(arr[1]);
    })
    sortedKeys = sortedKeys.map((arr) => arr[0]).join('');
    return sortedKeys;
};
