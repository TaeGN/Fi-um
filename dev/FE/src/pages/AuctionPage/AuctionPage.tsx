import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './AuctionPage.module.scss';
import { AuctionCard } from '@/components/molecules';

interface AuctionPageProps {
  className?: string;
}

const AuctionPage = ({ className }: AuctionPageProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'card-container',
      )}
    >
      <AuctionCard
        src="/vite.svg"
        alt="vite"
        title="title"
        startValue={priceFilter(10000)}
        currentValue={priceFilter(20000)}
        buyItNow={priceFilter(15000)}
      />
      <AuctionCard
        src="/vite.svg"
        alt="vite"
        title="title"
        startValue={priceFilter(10000)}
        currentValue={priceFilter(20000)}
        buyItNow={priceFilter(15000)}
      />
      <AuctionCard
        src="/vite.svg"
        alt="vite"
        title="title"
        startValue={priceFilter(10000)}
        currentValue={priceFilter(20000)}
        buyItNow={priceFilter(15000)}
      />
      <AuctionCard
        src="/vite.svg"
        alt="vite"
        title="title"
        startValue={priceFilter(10000)}
        currentValue={priceFilter(20000)}
        buyItNow={priceFilter(15000)}
      />
    </div>
  );
};

export default AuctionPage;
