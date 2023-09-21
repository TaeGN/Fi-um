import { BarChart, Text } from '@/components/atoms';
import styles from './FundingBar.module.scss';
import { convertClassName, convertClassNameList, priceFilter } from '@/utils';

interface FundingBar {
  className?: string;
  ratio: number;
  itemCount?: number;
  itemUnitPrice: number;
  fundingAmount: number;
}

const FundingBar = ({
  className,
  ratio,
  itemCount,
  itemUnitPrice,
  fundingAmount,
}: FundingBar): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        styles['funding-bar'],
        convertClassName(className, styles),
      )}
    >
      <Text
        text="목표금액"
        className={convertClassNameList('text-sm', styles['funding-bar__item'])}
      ></Text>
      <BarChart
        className={convertClassNameList(styles['funding-bar__item'])}
        ratio={ratio}
      />
      <div
        className={convertClassNameList(
          'flex-container',
          styles['funding-bar__item--bottom'],
        )}
      >
        <div className="flex-container-col flex-item">
          <Text className="text-sm gray" text="내 펀딩액"></Text>
          <Text className="text-sm" text="???원"></Text>
        </div>
        {itemCount ? (
          <div className="flex-container-col flex-item">
            <Text className="text-sm gray" text="개수"></Text>
            <Text className="text-sm orange" text={itemCount}></Text>
          </div>
        ) : (
          ''
        )}
        {fundingAmount ? (
          <div className="flex-container-col flex-item">
            <Text className="text-sm gray" text="현재 금액"></Text>
            <Text
              className="text-sm orange"
              text={priceFilter(fundingAmount)}
            ></Text>
          </div>
        ) : (
          ''
        )}
        {itemUnitPrice ? (
          <div className="flex-container-col flex-item">
            <Text className="text-sm gray" text="목표 금액"></Text>
            <Text className="text-sm" text={priceFilter(itemUnitPrice)}></Text>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FundingBar;
