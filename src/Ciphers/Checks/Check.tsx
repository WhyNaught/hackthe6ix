import axios from "axios";

export default async function Check(word: any) {
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=354253b9-f50b-492e-a9de-8844115fcafb`;

    try {
        const response = await axios.get(url);
        return response.data && response.data.word;
    } catch (error) {
        // In case of network error or other issues, return false
        console.error('Error:', error);
        return false;
    }
  }