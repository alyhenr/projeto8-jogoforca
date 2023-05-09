import { useState } from "react";

import Letras from "./Components/Letras";
import Jogo from "./Components/Jogo";
import imgsArr from './imgs';

function App() {
  const [indexImg, setIndexImg] = useState(0);
  const [gameOn, setGameOn] = useState(false);

  return (
    <>
      <Jogo currentImg={imgsArr[indexImg]} />
      <Letras gameOn={gameOn} />
    </>
  );
}

export default App;
