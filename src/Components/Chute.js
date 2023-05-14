import React, { useState } from 'react'
import { styled } from 'styled-components';

// Styled-Components
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;

    position: relative;

    width: 90%;    

    margin: 40px auto;
`;


const Chute = ({ gameOn, guessWord }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <Wrapper>
            <h1 style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                color: "#000"
            }}>Já sei a palavra!</h1>
            <input
                data-test="guess-input"
                disabled={!gameOn}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        guessWord(inputValue.toLowerCase());
                        setInputValue("");
                    }
                }}
                value={inputValue}
                style={{
                    width: "360px",
                    height: "40px",
                    background: "white",
                    border: "1px solid #CCCCCC",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                }}
            />
            <button
                data-test="guess-button"
                disabled={!gameOn}
                onClick={() => {
                    guessWord(inputValue.toLowerCase());
                    setInputValue("");
                }}
                style={{
                    width: "100px",
                    height: "40px",
                    background: "#E1ECF4",
                    border: "1px solid #7AA7C7",
                    borderRadius: "3px",
                    cursor: "pointer",
                }}
            >Chutar</button>
        </Wrapper>
    )
}

export default Chute