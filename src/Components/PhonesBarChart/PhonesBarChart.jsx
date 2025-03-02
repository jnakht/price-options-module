import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhonesBarChart = ({phones}) => {
//    const {phone_name, price} = phones;
console.log("thy are phones", phones)
    return (
        <div>
            <BarChart 
            width={1200} 
            height={600} 
            data={phones} 
            margin={{
                top: 5,
                bottom: 10,
                left: 100,
                right: 10,
            }}
            > 
                <Bar dataKey='price' fill='aquamarine'></Bar>
                <XAxis dataKey='name'></XAxis>
                <Tooltip></Tooltip>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis></YAxis>
                <Legend></Legend>
            </BarChart>
        </div>
    );
};

export default PhonesBarChart;