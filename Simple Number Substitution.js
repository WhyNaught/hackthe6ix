function decrypt(input){  // Input must be a STRING
    
    let n = input.length;
    let plaintext = "";
    for (let i = 0; i < (n/2); i++){
        let num = input.slice(2*i, 2*i+2);
        num = parseInt(num) + 96;
        plaintext += String.fromCharCode(num);
    }
    console.log(plaintext);
}
