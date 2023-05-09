import React, { useState } from 'react';
import { styled } from 'styled-components';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const Wrapper = styled.div`
    display: flex;
    justify: flex-start;
    width: 665px;
    height: 95px;
    margin: 0 auto;
    gap: 12px;
    flex-wrap: wrap;
`;

const Letter = styled.button`
    width: 40px;
    height: 40px;
    background: #E1ECF4;;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    color: #39739D;
    cursor: pointer;
`;

const Letra = ({ gameOn, letter }) => {
    console.log(gameOn);
    const [clicked, setClicked] = useState(!gameOn);
    return (
        <Letter
            disabled={clicked}
            onClick={() => setClicked(true)}
            style={clicked ?
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

const Letras = ({ gameOn }) => {
    return (
        <Wrapper>
            {alfabeto.map((letter, index) => (
                <Letra
                    gameOn={gameOn}
                    letter={letter}
                    key={`${letter}-${index}`}
                />
            ))}
        </Wrapper>
    )
}

export default Letras;