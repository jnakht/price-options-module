import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        { subject: "Math", marks: 85 },
        { subject: "English", marks: 78 },
        { subject: "Science", marks: 92 },
        { subject: "History", marks: 74 },
        { subject: "Geography", marks: 88 },
        { subject: "Physics", marks: 90 },
        { subject: "Chemistry", marks: 82 },
        { subject: "Biology", marks: 89 },
      ];
    return (
        <div>
            <LChart width={800} height={400} data={studentMarks}>
                <Line type='monotone' dataKey={'marks'} stroke='red'></Line>
                <XAxis dataKey='subject'></XAxis>
                <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;