import { useState } from "react";

import Letras from "./Components/Letras";
import Jogo from "./Components/Jogo";
import Chute from './Components/Chute';
import palavras from './palavras';
import imgsArr from './imgs';

let secretWord = "";
let hasWon = false, hasLost = false;

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [foundLetters, setFoundLetters] = useState(["placeholder"]);
  const [wrongChoices, setWrongChoices] = useState(0);

  const finishGame = (result) => {
    switch (result) {
      case 'win':
        hasWon = true;
        setGameOn(false);
        setFoundLetters(["placeholder"]);
        break;
      case 'loss':
        hasLost = true;
        setGameOn(false);
        setFoundLetters(["placeholder"]);
        setWrongChoices(0);
        break;
      default:
        break;
    }
  };

  // If the user tries to guess the word
  const guessWord = (word) => {
    if (word
      ===
      secretWord.split("").map(c => c.normalize('NFD')[0]).join("")) {
      finishGame('win');
    } else {
      finishGame('loss');
    }
  };

  // Check if the user has discovered the secret word
  if (foundLetters.join("") === secretWord) {
    finishGame('win');
  };

  // Check if the user has lost
  if (wrongChoices === imgsArr.length - 1) {
    finishGame('loss');
  };

  const shuffleWords = () => {
    if (gameOn || hasLost || hasWon) {
      setWrongChoices(0);
      setGameOn(false);
      setClickedLetters([]);
      hasLost = false;
      hasWon = false;
    }
    secretWord = palavras[Math.floor(Math.random() * (palavras.length - 1))];
    setGameOn(true);
    setFoundLetters(Array(secretWord.length).fill("_"));
    console.log(secretWord);
  };

  const handleChoice = (letter) => {
    if (secretWord.normalize('NFD').split('').includes(letter)) {
      setFoundLetters(secretWord.split('').map((c, i) => {
        if (c.normalize('NFD').split("")[0] === letter) {
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
        clickedLetters={clickedLetters}
        setClickedLetters={setClickedLetters}
      />
      <Chute gameOn={gameOn} guessWord={guessWord} />
    </>
  );
}

export default App;
