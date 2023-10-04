import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Funding.module.scss';
import { FundingCard, Swiper } from '@/components/molecules';
import { Funding as FundingType } from '@/types';
import { useMemo } from 'react';
import { Text } from '@/components/atoms';

interface FundingProps {
  className?: string;
  fundings?: FundingType[];
}

const Funding = ({ className, fundings }: FundingProps): JSX.Element => {
  const funding = useMemo(() => {
    const funding: JSX.Element[] = [];
    if (fundings) {
      const len = fundings.length;

      for (let index = 0; index <= (len - 1) / 4; index++) {
        funding.push(
          <div key={index} className="card-container">
            {fundings
              .slice(index * 4, Math.min((index + 1) * 4, len))
              .map((funding) => (
                <FundingCard key={funding.itemNo} funding={funding} />
              ))}
          </div>,
        );
      }
    }
    return funding;
  }, [fundings]);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding'],
      )}
    >
      <Text className="text-xl bold m-1" text="진행중인 펀딩" />
      <Swiper>{funding}</Swiper>
    </div>
  );
};

export default Funding;
