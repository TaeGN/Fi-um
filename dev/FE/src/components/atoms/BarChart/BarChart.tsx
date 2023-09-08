import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

import styles from './BarChart.module.css';
import { convertClassName } from '@/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options: any = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
      width: 10,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
      display: false,
    },
    title: {
      display: true,
      text: 'bar!!',
    },
  },
};

const labels = [''];

interface BarChartProps {
  className?: string;
  ratio: number;
}

const BarChart = ({ className, ratio }: BarChartProps) => {
  const data: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
      {
        // label: 'ㅇㅇ',
        data: [ratio, 100],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: '#d48100',
      },
    ],
  };
  return (
    <div
      className={[
        styles['bar-chart'],
        convertClassName(className, styles),
      ].join(' ')}
      data-testid="bar-chart"
    >
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;
