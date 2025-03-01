
import { LineChart, Line, XAxis, YAxis  } from 'recharts';
const MultiLineChart = () => {
    const studentsMarks = [
        { id: 1, name: "Alice", physics: 85, chemistry: 78, math: 92 },
        { id: 2, name: "Bob", physics: 75, chemistry: 82, math: 88 },
        { id: 3, name: "Charlie", physics: 90, chemistry: 89, math: 95 },
        { id: 4, name: "David", physics: 70, chemistry: 72, math: 80 },
        { id: 5, name: "Eve", physics: 88, chemistry: 85, math: 91 },
      ];
    return (
        <div>
            <LineChart width={800} height={500} data={studentsMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line type='monotone' dataKey='physics' stroke='red'></Line>
                <Line type='monotone' dataKey='chemistry' stroke='yellow'></Line>
                <Line type='monotone' dataKey="math" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default MultiLineChart;