import styled from 'styled-components';
import breakPoints from '../../Constants/breakPoints';

export const Input = styled.input`
    width: 275px;
    height: 68px;
    border: 1px solid blueviolet;
    border-radius: 5px;
    line-height: 48px;
    text-align: center;
    &:focus {
        outline: none;
    }
    font-size: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;

    @media (min-width: ${breakPoints.lgUp}) {
        font-size: 60px;
        width: 575px;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: max-content;
    border: none;
    margin-top: 150px;
    text-align: center;
`;

export const Loading = styled.img`
    position: fixed;
    transform: translate(100px, 100px);
    top: 50%;
    right: 50%;
`;

export const Header = styled.h1`
    width: 100%;
    border: none;
    margin-bottom: 100px;
    text-align: center;
    color: blueviolet;
    font-size: 35px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;

    @media (min-width: ${breakPoints.mdUp}) {
        font-size: 80px;
    }
`;
