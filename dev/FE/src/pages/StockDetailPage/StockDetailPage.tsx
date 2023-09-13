import { useState, useCallback, MouseEvent } from 'react';
import { convertClassName, convertClassNameList, loremData } from '@/utils';
import styles from './StockDetailPage.module.scss';
import useModal from '@/hooks/useModal';
import { Button, LineChart } from '@/components/atoms';
import { Modal, ModalStock } from '@/components/molecules';

interface StockDetailPageProps {
  className?: string;
}

const StockDetailPage = ({ className }: StockDetailPageProps): JSX.Element => {
  const { isOpen, toggle } = useModal();
  const [label, setLabel] = useState('매도');

  const onModal = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setLabel(e.currentTarget.value);
    toggle();
  }, []);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['stock-detail-page'],
      )}
    >
      <div className={convertClassNameList(styles['stock-detail-page__news'])}>
        {loremData}
      </div>
      <div className="flex-container">
        <LineChart
          className={convertClassNameList(
            styles['stock-detail-page__line-chart'],
          )}
        />

        <div
          className={convertClassNameList(styles['stock-detail-page__content'])}
        >
          <div
            className={convertClassNameList(
              styles['stock-detail-page__content--prev-news'],
            )}
          >
            news
          </div>
          <div
            className="
            flex-container jc-space-between"
          >
            <Button
              className={convertClassNameList(
                'bg-blue white',
                styles['stock-detail-page__content--button'],
              )}
              label="매도"
              value="매도"
              onClick={onModal}
            />
            <Button
              className={convertClassNameList(
                'bg-red white',
                styles['stock-detail-page__content--button'],
              )}
              label="매수"
              value="매수"
              onClick={onModal}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalStock
          className={className}
          label={label}
          onClick={() => console.log('구매!!!!')}
          toggle={toggle}
        />
      </Modal>
    </div>
  );
};

export default StockDetailPage;
