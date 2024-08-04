export default function Num(input: string){  // Input must be a STRING
    let n = input.length;
    let plaintext = "";
    for (let i = 0; i < (n/2); i++){
        let z = input.slice(2*i, 2*i+2);
        let num = parseInt(z);
        num += 96
        plaintext += String.fromCharCode(num);
    }
    return plaintext; 
}