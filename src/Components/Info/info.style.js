import styled from 'styled-components';

export const Div = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid ${props => props.color || 'blueviolet'};
    margin-top: 50px;
`;

export const Text = styled.p`
    text-align: center;
    font-size: 25px;
    color: ${props => props.color || 'black'};
`;
