import React from 'react';
import { styled } from 'styled-components';

// Styled-Components
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    position: relative;

    width: 90%;    

    margin: 20px 40px;
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

const SecretWordWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    
    width: fit-content;
    height: 70px;

    position: absolute;
    bottom: 15%;
    right: 0;

    gap: 15px;
`;
const Letter = styled(({ hasWon, hasLost, ...props }) => <div {...props} />)`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    text-align: center;

    color: ${props => props.hasWon
        ? "rgba(39, 174, 96, 1)"
        : props.hasLost ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 0, 1)"
    };
`;

// Components
const Jogo = ({ gameOn, shuffleWords, currentImg, foundLetters, hasWon, hasLost }) => {
    return (
        <Wrapper>
            <ImgHang
                data-test="game-image"
                src={currentImg}
                alt="img"
            />
            <BtnStart
                data-test="choose-word"
                onClick={() => shuffleWords()}
            >Escolher Palavra</BtnStart>
            {(gameOn || hasWon || hasLost) && <SecretWordWrapper data-test="word">
                {foundLetters.map((letter, index) => (
                    <Letter key={`${letter}-${index}`} hasWon={hasWon} hasLost={hasLost}>
                        {letter}
                    </Letter>
                ))}
            </SecretWordWrapper>}
        </Wrapper>
    )
}

export default Jogo;