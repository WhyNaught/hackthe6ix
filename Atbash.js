function decrypt(query){
    let plaintext = "";
    for (let letter of query){
        let charCode = letter.charCodeAt(0);
        if (letter.match(/[A-M]/)){
            plaintext += String.fromCharCode(90 - (charCode - 65));
        } else if (letter.match(/[N-Z]/)){
            plaintext += String.fromCharCode(65 + (90 - charCode));
        } else if (letter.match (/[a-m]/)){
            plaintext += String.fromCharCode(122 - (charCode - 97));
        } else if (letter.match (/[n-z]/)){
            plaintext += String.fromCharCode(97 + (122 - charCode));
        } else{
            plaintext += letter;
        }
    }
    console.log(`Plaintext: ${plaintext}`)
}


input = "Gsv Zgyzhs xrksvi rh z evib xlnnlm zmw hrnkov xrksviAAaaZzz";
decrypt(input);