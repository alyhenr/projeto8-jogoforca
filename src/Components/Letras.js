import React from 'react';
import { styled } from 'styled-components';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 665px;
    height: 95px;
    margin: 0 auto;
    gap: 12px;
    flex-wrap: wrap;
`;
const Letter = styled(({ gameOn, ...props }) => <button {...props} />)`
    width: 40px;
    height: 40px;
    background: ${props => props.gameOn ? "#E1ECF4" : "#9FAAB5"};
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.gameOn ? "#39739D" : "#798A9F"};
    cursor: pointer;        
`;

const Letra = ({ gameOn, handleChoice, letter, clickedLetters, setClickedLetters }) => {

    return (
        <Letter
            gameOn={gameOn}
            data-test="letter"
            onClick={() => {
                handleChoice(letter);
                setClickedLetters(prevState => [...prevState, letter]);
            }}
            disabled={gameOn ? clickedLetters.includes(letter) : !gameOn}
            style={clickedLetters.includes(letter) ?
                {
                    background: "#9FAAB5",
                    color: "#798A9F"
                }
                : {}}
        >
            {letter.toUpperCase()}
        </Letter>
    )
};

const Letras = ({ gameOn, handleChoice, clickedLetters, setClickedLetters }) => {
    return (
        <Wrapper>
            {alfabeto.map((letter, index) => (
                <Letra
                    gameOn={gameOn}
                    handleChoice={handleChoice}
                    letter={letter}
                    clickedLetters={clickedLetters}
                    setClickedLetters={setClickedLetters}
                    key={`${letter}-${index}`}
                />
            ))}
        </Wrapper>
    )
}

export default Letras;