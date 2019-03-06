countB = 0;
function countBs(checkB) {
    let stringLength = checkB.length;
    for(let i = 0; i < stringLength; i++) {
        if(checkB[i] == 'b' || checkB[i] == 'B')
        countB++;
    }
    return countB;
}

charCount = 0;
function countChar(checkString, charCheck) {
    let stringLength = checkString.length;
    for(let i = 0; i < stringLength; i++) {
        if(checkString[i] == charCheck) {
          charCount++;
        }
    }
    return charCount;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
