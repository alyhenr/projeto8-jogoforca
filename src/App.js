import { useState } from "react";

import Letras from "./Components/Letras";
import Jogo from "./Components/Jogo";
import palavras from './palavras';
import imgsArr from './imgs';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const letters = alfabeto.map(letter => ({ letter: letter, clicked: false }))
let secretWord = "";
let hasWon = false, hasLost = false;

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [lettersObj, setLettersObj] = useState(letters);
  const [foundLetters, setFoundLetters] = useState(["placeholder"]);
  const [wrongChoices, setWrongChoices] = useState(0);

  // Check if the user has discovered the secret word
  if (foundLetters.join("") === secretWord) {
    hasWon = true;
    setGameOn(false);
    setFoundLetters(["placeholder"]);
  };

  // Check if the user has lost
  if (wrongChoices === imgsArr.length - 1) {
    hasLost = true;
    setGameOn(false);
    setFoundLetters(["placeholder"]);
    setWrongChoices(0);
  };

  const shuffleWords = () => {
    secretWord = palavras[Math.floor(Math.random() * (palavras.length - 1))];
    setGameOn(true);
    setFoundLetters(Array(secretWord.length).fill("_"));
    console.log(secretWord);
  };

  const handleChoice = (letter) => {
    setLettersObj(prevState => {
      return prevState.map(letterObj => {
        if (letterObj.letter === letter) {
          letterObj.clicked = true;
        }
        return letterObj
      });
    });

    if (secretWord.split('').includes(letter)) {
      setFoundLetters(secretWord.split('').map((c, i) => {
        if (c === letter) {
          return c;
        } else if (foundLetters[i] !== "_") {
          return foundLetters[i];
        }
        return "_";
      }));
    } else {
      setWrongChoices(prevState => prevState + 1);
    }
  };

  return (
    <>
      <Jogo
        gameOn={gameOn}
        shuffleWords={shuffleWords}
        currentImg={hasLost
          ? imgsArr[imgsArr.length - 1]
          : imgsArr[wrongChoices]}
        foundLetters={hasLost || hasWon ? secretWord.split("") : foundLetters}
        hasWon={hasWon}
        hasLost={hasLost}
      />
      <Letras
        gameOn={gameOn}
        handleChoice={handleChoice}
        lettersObj={lettersObj}
      />
    </>
  );
}

export default App;
