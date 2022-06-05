exports.palindrome = function(word) {
    let reverse = ""
    let testWord = word.toString().toLowerCase().replace(" ", "")


    for (let i = testWord.length-1; i > -1; i--) {
        reverse += testWord[i]
    }
    return reverse == testWord

};

console.log(this.palindrome("racecar"))
