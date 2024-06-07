import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pho1, setPho1] = useState(0)
  const [pho2, setPho2] = useState(0)
  const [pho3, setPho3] = useState(0)

  const handleClick = () => {
    setPho1(randomNumberInRange(0, 42));
    setPho2(randomNumberInRange(0, 42));
    setPho3(randomNumberInRange(0, 42));
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const phonemes = [
    // Consonants
    "p", "b", "t", "d", "k", "g", // Plosives
    "m", "n", "ŋ", // Nasals
    "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", // Fricatives
    "tʃ", "dʒ", // Affricates
    "l", "r", // Liquids
    "j", "w", // Glides

    // Vowels
    "i", "ɪ", "e", "ɛ", "æ", // Front vowels
    "ɑ", "ɒ", "ʌ", "ɔ", "ɒ", // Back vowels
    "u", "ʊ", // High back vowels
    "ə", "ɚ", // Schwa and rhotacized schwa

    // Diphthongs
    "aɪ", "aʊ", "ɔɪ", "eɪ", "oʊ"
];

console.log(count);



  return (
    <>
      <h1>Rhyme Dice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>   
        <button onClick={() => setCount(randomNumberInRange(0,42))}>
          phoneme is {phonemes[count]}
        </button>       

        <button onClick={handleClick}> roll
        </button>      



        <p>{phonemes[pho1]} - {phonemes[pho2]} - {phonemes[pho3]}</p>
        {/* <p>{phonemes[pho2]}</p>
        <p>{phonemes[pho3]}</p> */}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
