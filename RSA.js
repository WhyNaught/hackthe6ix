const primeFactors = require('prime-factors');
var bigInt = require("big-integer");

function decrypt(query, N, e){
    // Prime factorize N, assign it to p and q
    let factors = primeFactors(N);
    let p = factors[0];
    let q = factors[1];

    // Calculate necessary values
    let M = (p - 1) * (q - 1);
    console.log(`p = ${p}, q = ${q}, M = ${M}`);

    let d = bigInt(e).modInv(M);
    console.log(`d = ${d}`);

    let decodednum = bigInt(query).modPow(d, N);
    console.log(`decodednum = ${decodednum}`);
    let m = "";
    decodednum = decodednum.toString();
    for (let i = 0; i < (decodednum.length)/2; i++){
        let z = "";
        z += decodednum[2*i].toString() + decodednum[2*i+1].toString();
        m += String.fromCharCode(parseInt(z, 10)+86);
    }
    console.log(`Plaintext: ${m}`);
}

let input = 2599444452;
let e = 46951;
let N = 14402506231;
decrypt(input, N, e);