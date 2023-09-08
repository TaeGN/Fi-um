import { ChartData } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data: ChartData<'line', number[], string> = {
  labels: ['7-8', '8-9', '9-10', '10-11', '11-12', '17-18', '18-19', '19-20'],
  datasets: [
    {
      type: 'line',
      label: 'XX주식',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [1, 2, 13, 4, 5, 6, 7, 8],
      borderColor: 'red',
      borderWidth: 2,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
