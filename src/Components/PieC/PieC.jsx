
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const PieC = () => {
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
          
    return (
        <div>
            <PieChart width={500} height={500}>
                <Pie data={data01} dataKey={'value'} cx={'50%'} cy={'50%'} fill="#8884d8" outerRadius={50}></Pie>
               <Pie data={data02} dataKey={'value'} cx={'50%'} cy={'50%'} innerRadius={60} outerRadius={80} fill="#82ca9d" label></Pie>
            </PieChart>
        </div>
    );
};

export default PieC;