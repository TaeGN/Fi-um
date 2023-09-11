import { BarChart, Text } from '@/components/atoms';
import styles from './FundingBar.module.scss';
import { convertClassName, convertClassNameList } from '@/utils';

interface FundingBar {
  className?: string;
  ratio: number;
}

const FundingBar = ({ className, ratio }: FundingBar): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        styles['funding-bar'],
        convertClassName(className, styles),
      )}
    >
      <Text
        text="목표금액"
        className={convertClassNameList('text-sm', styles['funding-bar-item'])}
      ></Text>
      <BarChart
        className={convertClassNameList(
          // 'bg-orange',
          styles['funding-bar-item'],
          styles['funding-bar-chart'],
        )}
        ratio={ratio}
      />
      <div
        className={convertClassNameList(
          'flex-container',
          styles['funding-bar-item-bottom'],
        )}
      >
        <div className="flex-container-col flex-item">
          <Text className="text-sm gray" text="당첨금액"></Text>
          <Text className="text-sm" text="1000원"></Text>
        </div>
        <div className="flex-container-col flex-item">
          <Text className="text-sm gray" text="당첨금액"></Text>
          <Text className="text-sm" text="1000원"></Text>
        </div>
        <div className="flex-container-col flex-item">
          <Text className="text-sm gray" text="당첨금액"></Text>
          <Text className="text-sm orange" text="1000원"></Text>
        </div>
      </div>
    </div>
  );
};

export default FundingBar;
