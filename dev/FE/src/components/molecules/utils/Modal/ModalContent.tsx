import { useMemo } from 'react';
import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './Modal.module.scss';
import { Button, Text } from '@/components/atoms';

interface ModalContentProps {
  className?: string;
  label: string;
  onClick: () => void;
}

const ModalContent = ({
  className,
  label,
  onClick,
}: ModalContentProps): JSX.Element => {
  const colorStyle = useMemo(() => {
    if (label === '매도') {
      return {
        textColor: 'blue',
        bgColor: 'bg-blue',
        bgColorLight: 'bg-skyblue',
      };
    } else {
      return {
        textColor: 'red',
        bgColor: 'bg-red',
        bgColorLight: 'bg-pink',
      };
    }
  }, [label]);

  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        styles['modal'])
      }
    >
      <div
        className={convertClassNameList(
          styles['modal__title'],
          'flex-container',
        )}
      >
        <Text
          className={convertClassNameList('text-lg', colorStyle.textColor)}
          text={label}
        />
        <Text className="text-lg" text="&nbsp;주문" />
      </div>
      <div className="flex-container jc-space-between">
        <Text className="text-md" text="주문수량" />
        <div className="flex-container">
          <Text className="text-md" text="주문가능" />
          <Text
            className={convertClassNameList('text-md', colorStyle.textColor)}
            text="&nbsp;12"
          />
          <Text className="text-md" text="&nbsp;주" />
        </div>
      </div>

      <input
        className={convertClassNameList(styles['modal__input'])}
        type="number"
      />

      <div className="flex-container jc-space-between">
        <Button
          className={convertClassNameList(
            styles['modal__button'],
            'bg-gray-light',
          )}
          label="10%"
          onClick={() => {
            console.log('10%');
          }}
        />
        <Button
          className={convertClassNameList(
            styles['modal__button'],
            'bg-gray-light',
          )}
          label="25%"
          onClick={() => {
            console.log('25%');
          }}
        />
        <Button
          className={convertClassNameList(
            styles['modal__button'],
            'bg-gray-light',
          )}
          label="50%"
          onClick={() => {
            console.log('50%');
          }}
        />
        <Button
          className={convertClassNameList(
            styles['modal__button'],
            'bg-gray-light',
          )}
          label="100%"
          onClick={() => {
            console.log('100%');
          }}
        />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal__price'],
        )}
      >
        <Text className="text-md" text="주문단가" />
        <Text className="text-md" text={priceFilter(20000)} />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal__price'],
        )}
      >
        <Text className="text-md" text="총 주문금액" />
        <Text className="text-md" text={priceFilter(10000)} />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-center',
          styles['modal__button-container'],
        )}
      >
        <Button
          className={convertClassNameList(
            styles['modal__button'],
            colorStyle.bgColorLight,
            colorStyle.textColor,
          )}
          label="취소"
          onClick={() => {
            console.log('취소버튼');
          }}
        />
        <Button
          className={convertClassNameList(
            styles['modal__button'],
            'white',
            colorStyle.bgColor,
          )}
          label={label}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ModalContent;
