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

import styles from './BarChart.module.scss';
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
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
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
      <Bar  data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;
