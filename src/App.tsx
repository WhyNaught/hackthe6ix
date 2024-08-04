import './App.css';
import Caesar from './Ciphers/Caesar';
import AtBash from './Ciphers/AtBash';
import {useState} from 'react';

export default function App() {
  const [input, setInput] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [algo, setAlgo] = useState("");
  const [tempAlgo, setTempAlgo] = useState("");
  
  function handleInputChange(e: any) {
    setInput(e.target.value);
  }

  function handleAlgoChange(e: any) {
    setTempAlgo(e.target.value);
  }

  function submitInput() {
    setCipherText(input);
    setInput("");
    setAlgo(tempAlgo);
    setTempAlgo("");
  }

  return (
    <>
      <input className = "text" type = "text" value = {input} onChange = {() => handleInputChange(event)}/>
      <select  value = {tempAlgo} onChange = {() => handleAlgoChange(event)}>
        <option>Select a Cipher</option>
        <option>AI</option>
        <option>Caesar Cipher</option>
        <option>RSA</option>
        <option>AtBash</option>
      </select>
      <button className = "submit-button" onClick = {() => submitInput()}>Submit Encrypted Text!</button>
      <h1>Your Decrypted Text Using {algo}:</h1>
      <div className='result'>
        {
          algo === "Caesar Cipher" ? Caesar(cipherText) :
          algo === "AtBash" ? AtBash(cipherText) :
          cipherText
        }
      </div>
    </>
  )
}