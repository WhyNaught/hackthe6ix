export default function AtBash(query:any){
    let newQuery = JSON.stringify(query);
    let plaintext = "";
    for (let letter of newQuery){
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
    return (
        <h4>{plaintext}</h4>
    )
}