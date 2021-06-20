import React, { createContext, useState } from 'react';
import axios from 'axios';

export const historyContext = createContext([]);

export const HistoryContextProvider = ({ children }) => {
    const [chartData, setChartData] = useState([]);
    const [info, setInfo] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const checkHistory = historyData => {
        setInfo('');
        if (historyData.length === 1) {
            const price = historyData[0].prices
                ? `$${historyData[0].prices.USD}`
                : 'negotiable.';
            setInfo(
                `The price hasn't changed since ${
                    historyData[0].date.split('T')[0]
                } and is ${price}`
            );
        } else if (historyData.length > 0 && historyData[0].prices) {
            const data = [];
            historyData.map(item => {
                if (!item.prices) {
                    setInfo(
                        info +
                            `Price at ${
                                historyData[0].date.split('T')[0]
                            } was negotiable.`
                    );
                }
                data.push({
                    name: item.date.split('T')[0],
                    price: item.prices.GEL,
                });
                return item;
            });
            setChartData([...data]);
        }
    };
    const getHistory = id => {
        clearHistoryData();
        if (id.length !== 8) {
            setError('Invalid ID or URL!');
        } else {
            setLoading(true);
            axios
                .get(
                    `https://api.pricehistory.ge/history/
myauto.ge/${id}`
                )
                .then(({ data }) => {
                    checkHistory(data);
                    setLoading(false);
                })
                .catch(err => {
                    if (err.response && err.response.status === 404) {
                        setError("price history couldn't be found");
                        setLoading(false);
                    } else {
                        setError('something went wrong');
                        setLoading(false);
                    }
                });
        }
    };

    const clearHistoryData = () => {
        setInfo('');
        setError('');
        setChartData([]);
    };

    return (
        <historyContext.Provider
            value={{
                loading,
                chartData,
                getHistory,
                clearHistoryData,
                info,
                error,
            }}
        >
            {children}
        </historyContext.Provider>
    );
};
