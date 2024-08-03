function decrypt(input){

    const commonWords = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you"]; // List of common English words
    let bestShift = 0;
    let bestMatchCount = 0;
    let bestOutput = "";

    for(let i = 1; i < 26; i++){ //iterate keys from 1-25
        var output = "";
        for(let letter of input) //iterate through input
            {    
                let charCode = letter.charCodeAt(0);
                if (isUpper(letter) === true){
                    if (charCode - i >= 65){
                        output += String.fromCharCode(charCode - i);
                    } else if (charCode - i < 65){
                        output += String.fromCharCode(91 - (65 - (charCode - i)));
                    }
                } else if (isLower(letter) === true){
                    if (charCode - i >= 97){
                        output+= String.fromCharCode(charCode - i);
                    } else if (charCode - i < 97){
                        output+= String.fromCharCode(123 - (97 - (charCode - i)));
                    }
                } else{
                    output+=letter;
                }
            }
        let matchCount = 0;
        for (let word of commonWords){
            if (output.toLowerCase().includes(word)){
                matchCount ++;
            }
        }
        if (matchCount > bestMatchCount){
            bestMatchCount = matchCount;
            bestShift = i;
            bestOutput = output;
        }
    }
    console.log(`Shifts by ${bestShift} \nDecrypted Plaintext: ${bestOutput} \n`);
}

function isUpper(letter){
    return letter.match(/[A-Z]/) !== null;
}
function isLower(letter){
    return letter.match(/[a-z]/) !== null;
}

var input = "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba."
decrypt(input);