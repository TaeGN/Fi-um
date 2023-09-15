import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingInfo.module.scss';
import { Button, Image, Text } from '@/components/atoms';
import { FundingBar } from '@/components/molecules';

interface FundingInfoProps {
  className?: string;
}

const FundingInfo = ({ className }: FundingInfoProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'flex-container',
        'jc-space-between',
      )}
    >
      <div
        className={convertClassNameList(
          convertClassName(className, styles),
          styles['funding-info__left'],
          'bg-gray-light',
        )}
      >
        <div>
          <Image src="" alt="" />
        </div>
        <Text className="text-xxl" text="제목" />
      </div>
      <div
        className={convertClassNameList(
          convertClassName(className, styles),
          styles['funding-info__right'],
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
        />
        <div className="flex-container jc-space-between align-end">
          <Button className="gray small" label="취소" />
          <Button className="primary small" label="결제" />
        </div>
      </div>
    </div>
  );
};

export default FundingInfo;
