import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify: flex-start;
    width: 665px;
    height: 95px;
    margin: 0 auto;
    gap: 12px;
    flex-wrap: wrap;
`;

const Letra = ({ gameOn, handleChoice, letter, clicked }) => {
    const Letter = styled.button`
        width: 40px;
        height: 40px;
        background: ${gameOn ? "#E1ECF4" : "#9FAAB5"};
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 16px;
        font-weight: 700;
        color: ${gameOn ? "#39739D" : "#798A9F"};
        cursor: pointer;
    `;
    return (
        <Letter
            data-test="letter"
            onClick={() => {
                handleChoice(letter);
            }}
            disabled={clicked}
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

const Letras = ({ gameOn, handleChoice, lettersObj }) => {
    return (
        <Wrapper>
            {lettersObj.map((letterObj, index) => (
                <Letra
                    gameOn={gameOn}
                    handleChoice={handleChoice}
                    letter={letterObj.letter}
                    clicked={letterObj.clicked}
                    key={`${letterObj.letter}-${index}`}
                />
            ))}
        </Wrapper>
    )
}

export default Letras;