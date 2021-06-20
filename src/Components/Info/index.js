import React, { useContext } from 'react';
import { historyContext } from '../../Context/history';
import { Div, Text } from './info.style';

const InfoBox = () => {
    const { info, error } = useContext(historyContext);

    if (error) {
        return (
            <>
                <Div color="red">
                    <Text color="red">{error}</Text>
                </Div>
            </>
        );
    }

    if (info) {
        return (
            <>
                <Div>
                    <Text color="blueviolet">{info}</Text>
                </Div>
            </>
        );
    }
    return null;
};

export default InfoBox;
