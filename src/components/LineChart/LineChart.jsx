import { Line, LineChart as LChart, XAxis,YAxis } from "recharts";

const LineChart = () => {
  const studentData = [
    {
      student: "Student 1",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 92,
    },
    {
      student: "Student 2",
      mathMarks: 78,
      physicsMarks: 85,
      chemistryMarks: 89,
    },
    {
      student: "Student 3",
      mathMarks: 92,
      physicsMarks: 90,
      chemistryMarks: 94,
    },
    {
      student: "Student 4",
      mathMarks: 88,
      physicsMarks: 82,
      chemistryMarks: 91,
    },
    {
      student: "Student 5",
      mathMarks: 76,
      physicsMarks: 79,
      chemistryMarks: 85,
    },
    {
      student: "Student 6",
      mathMarks: 90,
      physicsMarks: 88,
      chemistryMarks: 93,
    },
    {
      student: "Student 7",
      mathMarks: 95,
      physicsMarks: 92,
      chemistryMarks: 96,
    },
    {
      student: "Student 8",
      mathMarks: 82,
      physicsMarks: 75,
      chemistryMarks: 80,
    },
    {
      student: "Student 9",
      mathMarks: 89,
      physicsMarks: 86,
      chemistryMarks: 90,
    },
    {
      student: "Student 10",
      mathMarks: 91,
      physicsMarks: 87,
      chemistryMarks: 93,
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={studentData}>
      <XAxis dataKey="student"></XAxis>
      <YAxis/>
        <Line type="natural" dataKey="mathMarks" stroke="#0000ff"></Line>
        <Line type="linear" dataKey="physicsMarks" stroke="#00ff00"></Line>
        <Line type="monotone" dataKey="chemistryMarks" stroke="#ff0000"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
