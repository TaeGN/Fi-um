import { Image, Text } from '@/components/atoms';
import styles from './FundingCard.module.scss';
import { convertClassNameList, loremData } from '@/utils';
import { FundingBar } from '../..';

const FundingCard = () => {
  return (
    <div className={styles['funding-card']} data-testid="funding-card">
      <Image className={styles['funding-card-image']} src="" alt="aa" />
      <Text
        className={convertClassNameList('test-sm', styles['funding-card-text'])}
        text={loremData}
      />
      <FundingBar
        className={convertClassNameList(
          styles['bar-chart'],
          styles['funding-card-funding-bar'],
        )}
        ratio={70}
        itemUnitPrice={0}
        fundingAmount={0}
      />
    </div>
  );
};

export default FundingCard;
