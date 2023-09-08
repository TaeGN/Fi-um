import { Doughnut  } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getLightColors, getDarkColors } from '@/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const labels = []

const data: ChartData<'doughnut', number[], string> = {
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

const PieChart = () => {
  return (
    <div>
      <Doughnut data={data} options={options} data-testid="pie"></Doughnut>
    </div>
  );
};

export default PieChart;
