
import { BarChart as BChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChart = () => {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]
    return (
        <div>
            <BChart width={800} height={500} data={data}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={'uv'} fill='red'></Bar>
                <Bar dataKey={'pv'} fill='green'></Bar>
            </BChart>
        </div>
    );
};

export default BarChart;