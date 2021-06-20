import React, { useContext } from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';
import { historyContext } from '../../Context/history';

const ChartDrawer = () => {
    const { chartData } = useContext(historyContext);
    if (chartData.length > 0) {
        return (
            <LineChart
                width={350}
                height={350}
                data={chartData}
                margin={{ top: 50, right: 10, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        );
    } else {
        return null;
    }
};

export default ChartDrawer;
