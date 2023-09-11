import { useState, useCallback } from 'react';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './StockDetailPage.module.scss';
import useModal from '@/hooks/useModal';
import { Button } from '@/components/atoms';
import { Modal } from '@/components/molecules';

interface StockDetailPageProps {
  className?: string;
}

const StockDetailPage = ({ className }: StockDetailPageProps): JSX.Element => {
  const { isOpen, toggle } = useModal();
  const [label, setLabel] = useState('매도');

  const onModal = (label: string) =>
    useCallback(() => {
      setLabel(label);
      toggle();
    }, [label]);
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Button
        className="bg-blue white"
        label="매도"
        onClick={onModal('매도')}
      />
      <Button className="bg-red white" label="매수" onClick={onModal('매수')} />
      <Modal
        className=""
        label={label}
        isOpen={isOpen}
        toggle={toggle}
        onClick={null}
      />
    </div>
  );
};

export default StockDetailPage;
