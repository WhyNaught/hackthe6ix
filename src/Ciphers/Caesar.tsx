export default function Caesar(input: string){
    const commonWords = ["a", "i", "th", "he", "in", "er", "an", "re", "nd", "at", "on", "es", "st", "en", "ed", "to", "it", "or", "te", "ar", "al", "is", "as", "ou", "ro", "ng", "of", "ha", "ut", "le", "me", "si", "so", "ve", "we", "by", "my", "go", "no", "up", "be", "if", "do", "hi", "pa", "wo", "li", "ad", "fa", "di", "mu", "ca", "na", "mo", "wa", "lo", "sa", "pe", "ma", "da", "jo", "ri", "hi", "tu", "zi", "xu", "ju", "ki", "lu", "ni", "qi", "yu", "za"]; // List of common English words
    let bestShift = 0;
    let bestMatchCount = 0;
    let bestOutput = "";

    for(let i = 0; i < 26; i++){ //iterate keys from 1-25
        var output = "";
        for(let letter of input) //iterate through input
            {    
                let charCode = letter.charCodeAt(0);
                if (letter.match(/[A-Z]/)){
                    if (charCode - i >= 65){
                        output += String.fromCharCode(charCode - i);
                    } else if (charCode - i < 65){
                        output += String.fromCharCode(91 - (65 - (charCode - i)));
                    }
                } else if (letter.match(/[a-z]/)){
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
    return (
        <h4>{bestOutput}</h4>
    )
}