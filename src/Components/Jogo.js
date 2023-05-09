import React, { useState } from 'react';
import { styled } from 'styled-components';

// Styled-Components
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: flex-start;

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
const Jogo = ({ currentImg }) => {
    return (
        <Wrapper>
            <ImgHang src={currentImg} alt="img" />
            <BtnStart>Escolher Palavra</BtnStart>
        </Wrapper>
    )
}

export default Jogo;