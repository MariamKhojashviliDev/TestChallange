import React, { useEffect, useState, useContext } from 'react';
import { Input, Container, Header, Loading } from './form.style';
import { historyContext } from '../../Context/history';
import loadingIcon from '../../assets/Spinner-1s-204px.svg';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const { getHistory, loading } = useContext(historyContext);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (inputValue) {
                if (inputValue.length > 8) {
                    const url = inputValue.split('/');
                    const index = url.findIndex(item => item === 'pr') + 1;
                    getHistory(inputValue.split('/')[index]);
                } else {
                    getHistory(inputValue);
                }
            }
        }, 2000);
        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    return (
        <Container>
            {loading && <Loading src={loadingIcon} alt="loading" />}
            <Header>Track Price Changes on MyAuto.ge</Header>
            <Input
                placeholder="Input Car ID or Link"
                autoComplete="off"
                onChange={e => setInputValue(e.currentTarget.value)}
                type="text"
            />
        </Container>
    );
};

export default Form;
