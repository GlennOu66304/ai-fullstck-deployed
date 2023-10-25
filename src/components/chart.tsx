"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Chart = ({data}) => {
    const formattedData = data.map(item => {
        const date = new Date(item.createdAt);
        const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        return {
            ...item,
            createdAt: formattedDate
        };
    });
    console.log(formattedData);
    return (
        <div>
            <LineChart width={500} height={300} data={formattedData}>
                <XAxis dataKey="createdAt" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sentimentScore" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Chart;
