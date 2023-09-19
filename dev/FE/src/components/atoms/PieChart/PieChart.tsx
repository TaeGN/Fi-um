import { Doughnut } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getLightColors, getDarkColors } from '@/utils';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './PieChart.module.scss';
import { useMemo } from 'react';
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  className?: string;
  chartData?: { labels: string[]; data: number[]; length: number };
}

const options: any = {
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

const initialData: ChartData<'doughnut', number[], string> = {
  labels: ['aa'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: getLightColors(6),
      borderColor: getDarkColors(6),
      borderWidth: 1,
    },
  ],
};

const PieChart = ({ className, chartData }: PieChartProps): JSX.Element => {
  const data: ChartData<'doughnut', number[], string> | undefined =
    useMemo(() => {
      if (!chartData) return undefined;
      return {
        labels: chartData.labels,
        datasets: [
          {
            // label: '# of Votes',
            data: chartData.data,
            backgroundColor: getLightColors(chartData.length),
            borderColor: getDarkColors(chartData.length),
            borderWidth: 1,
          },
        ],
      };
    }, [chartData]);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['pie-chart'],
      )}
    >
      <Doughnut
        data={data ?? initialData}
        options={options}
        data-testid="pie"
      ></Doughnut>
    </div>
  );
};

export default PieChart;