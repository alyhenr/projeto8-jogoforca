import React from 'react';
import { styled } from 'styled-components';

// Styled-Components
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: flex-start;

    position: relative;

    width: 90%;

    margin: 60px 40px;
`;

const ImgHang = styled.img`
    width: 400px;
    height: 465px;
`;

const BtnStart = styled.button`
    width: 200px;
    height: 60px;
    background: #27AE60;
    border-radius: 8px;
    border: none;
    text-align: center;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;

`;

// Components
const Jogo = ({ gameOn, shuffleWords, currentImg, foundLetters, hasWon, hasLost }) => {
    const SecretWordWrapper = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        
        width: fit-content;
        height: 70px;

        position: fixed;
        bottom: 25%;
        right: 15%;

        gap: 15px;
    `;
    const Letter = styled.div`
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        text-align: center;

        color: ${hasWon
            ? "rgba(39, 174, 96, 1)"
            : hasLost ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 0, 1)"
        };
    `;
    return (
        <Wrapper>
            <ImgHang
                src={currentImg}
                alt="img"
            />
            <BtnStart
                disabled={gameOn && !(hasLost || hasWon)}
                onClick={() => (hasLost || hasWon) ? window.location.reload() : shuffleWords()}
            >Escolher Palavra</BtnStart>
            {(gameOn || hasWon || hasLost) && <SecretWordWrapper>
                {foundLetters.map((letter, index) => (
                    <Letter key={`${letter}-${index}`}>
                        {letter}
                    </Letter>
                ))}
            </SecretWordWrapper>}
        </Wrapper>
    )
}

export default Jogo;