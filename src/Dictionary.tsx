import {useState} from 'react';

export default function Dictionary() { 
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDef = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            if (!response.ok) {
                throw new Error("Word Not Found");
            }
            const data = await response.json();
            setDefinition(data[0].meanings[0].definitions[0].definition);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setDefinition("");
        }
        setIsLoading(false);
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        fetchDef();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={word} 
                    onChange={(e) => setWord(e.target.value)} 
                    placeholder="Enter a word" 
                />
                <button type="submit">Search</button>
            </form>
            {isLoading ? <div>Loading...</div> : 
            <div>
                {definition && <p>Definition: {definition}</p>}
                {error && <p>Error: {error}</p>}
            </div>
            }
            
        </div>
    )
}