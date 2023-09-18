import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingPayment.module.scss';
import { Button, Text } from '@/components/atoms';
import { FundingBar } from '@/components/molecules';

interface FundingPaymentProps {
  className?: string;
}

const FundingPayment = ({ className }: FundingPaymentProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding-payment'],
        'bg-gray-light',
        'grid-container',
      )}
    >
      <div>
        <Text className="blue text-lg bold" text="전체가격" />
        <div>
          <input type="number" name="" id="" />
        </div>
        <Text className="text-lg bold" text="따뜻한 한 마디" />
        <div>
          <input type="text" />
        </div>
      </div>
      <FundingBar
        className={convertClassNameList(styles['bar-chart'])}
        ratio={70}
        itemUnitPrice={0}
        fundingAmount={0}
      />
      <div className="flex-container jc-space-between align-end">
        <Button className="gray small" label="취소" />
        <Button className="primary small" label="결제" />
      </div>
    </div>
  );
};

export default FundingPayment;
