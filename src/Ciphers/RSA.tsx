export default function RSA(query: any){
    let newArray = query.split(",");

    function decrypt(query:any, e:any, N:any){
        
        // Prime factorize N, assign it to p and q
        let factorList = primeFactor(N);
        //console.log(factorList);
        let p = (factorList[0]);
        let q = (factorList[1]);

        // Calculate necessary values
        let M = (p - 1) * (q - 1);
        //console.log(`p = ${p}, q = ${q}, M = ${M}`);

        let d = modularInverse(e, M);
        //console.log(`d = ${d}`);

        let decodednum = pow(query, d, N);
        //console.log(`decodednum = ${decodednum}`);
        let m = "";
        decodednum = decodednum.toString();
        for (let i = 0; i < (decodednum.length)/2; i++){
            let z = "";
            z += decodednum[2*i].toString() + decodednum[2*i+1].toString();
            m += String.fromCharCode(parseInt(z, 10)+86);
        }
        return m; // final decrypted text
        
        function primeFactor(n:any) {
            let factors = [];
            while (n % 2 === 0) {
                factors.push(2);
                n = n / 2;
            }
            for (let i = 3; i * i <= n; i += 2) {
                while (n % i === 0) {
                    factors.push(Number(i));
                    n /= i;
                }
            }
            if (n > 2) {
                factors.push(Number(n));
            }
            return factors;
        }
        function extendedGCD(a:any, b:any) {
            if (b === 0) {
                return { gcd: a, x: 1, y: 0 };
            } else {
                const { gcd, x, y } = extendedGCD(b, a % b);
                return { gcd, x: y, y: x - Math.floor(a / b) * y };
            }
        }
        
        function modularInverse(a:any, m:any) {
            const { gcd, x } = extendedGCD(a, m);
            if (gcd !== 1) {
                throw new Error(`Inverse does not exist since ${a} and ${m} are not coprime.`);
            } else {
                // Ensure the result is positive
                return (x % m + m) % m;
            }
        }
        function pow(base, exp, mod){

            let result = 1;
            // express exp as binary
            let binaryExp = decimalToBinary(exp);
            //console.log(binaryExp);
        
            // iterate through every digit of ex as a binary number
            for (let letter of binaryExp){
                //console.log(letter);
                result = (result ** 2) % mod
                if (letter === '1'){
                    result = ((result) * base) % mod;
                }
            // console.log(result);
            }
            return result;
        
            function decimalToBinary(decimal:any) {
                if (decimal === 0) return "0";
            
                let binary = "";
                
                while (decimal > 0) {
                const remainder = decimal % 2;
                binary = remainder + binary; // Prepend remainder to the binary string
                decimal = Math.floor(decimal / 2); // Reduce decimal by dividing by 2
                }
            
                return binary;
            }
        }
    }

     // e = second last number, N = last number
    let N = newArray[newArray.length-1];
    let e = newArray[newArray.length-2];
    let plaintext = "";
    for (let i = 0; i < newArray.length - 2; i++){
        let item = newArray[i];
        plaintext += decrypt(parseInt(item, 10), e, N);
    }
    return (
        <h4>{plaintext}</h4>
    )
}