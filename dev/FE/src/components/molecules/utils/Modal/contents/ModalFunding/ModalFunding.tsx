import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './ModalFunding.module.scss';
import { Button, Text } from '@/components/atoms';
import { ChangeEvent, MouseEvent, useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { Funding } from '@/types';

interface ModalFundingProps {
  className?: string;
  item: Funding;
  onClick: (itemNo: number, price: number) => void;
  closeToggle?: () => void;
}

// 나중에 props로 대체 예정
const ratioList = [1, 5, 10, 100];
const balance = 100000;

const ModalFunding = ({
  className,
  item,
  onClick,
  closeToggle,
}: ModalFundingProps): JSX.Element => {
  const [price, setPrice] = useState<number>(0);

  console.log(item);

  const colorStyle = useMemo(() => {
    return {
      textColor: 'blue',
      bgColor: 'bg-blue',
      bgColorLight: 'bg-skyblue',
    };
  }, []);

  // 주문 수량 변동 함수
  const handleChangePrice = useCallback(
    (
      e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    ): void => {
      const newPrice = Number(e.currentTarget.value);
      if (newPrice > balance || newPrice < 0) return;
      setPrice(newPrice);
    },
    [balance],
  );

  const handleFundingSend = () => {
    onClick(Number(item.itemNo), price);
  };

  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        styles['modal-funding'])
      }
    >
      <div
        className={convertClassNameList(
          styles['modal-funding__title'],
          'flex-container',
        )}
      >
        <Text
          className={convertClassNameList('text-xl', colorStyle.textColor)}
          text="펀딩"
        />
      </div>

      <div
        className={convertClassNameList(
          styles['modal-funding__input-container'],
        )}
      >
        <input
          className={convertClassNameList(styles['modal-funding__input'])}
          type="number"
          name="price"
          value={price}
          onChange={handleChangePrice}
        />
        <Text
          className={convertClassNameList(
            'text-sm',
            styles['modal-funding__input--text'],
          )}
          text="&nbsp;원"
        />
        <div
          className={convertClassNameList(
            styles['modal-funding__input--button-container'],
          )}
        >
          <Button
            className={convertClassNameList(
              styles['modal-funding__input--button'],
            )}
            label={<FontAwesomeIcon icon={faChevronUp} size="xs" />}
            value={price + 1}
            onClick={handleChangePrice}
          />
          <Button
            className={convertClassNameList(
              styles['modal-funding__input--button'],
            )}
            label={<FontAwesomeIcon icon={faChevronDown} size="xs" />}
            value={price - 1}
            onClick={handleChangePrice}
          />
        </div>
      </div>

      <div className="flex-container jc-space-between">
        {/* % 버튼들 */}
        {ratioList.map(
          (ratio: number): JSX.Element => (
            <Button
              key={ratio}
              className={convertClassNameList(
                styles['modal-funding__button'],
                'bg-gray-light',
              )}
              label={priceFilter(ratio * 10000)}
              value={String(Math.floor((balance * ratio) / 10))}
              onClick={handleChangePrice}
            />
          ),
        )}
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal-funding__price'],
        )}
      >
        <Text className="text-md" text="전체 펀딩액" />
        <Text
          className="text-md"
          text={priceFilter(
            item.unitPrice
              ? item.unitPrice * item.itemCount
              : item.itemUnitPrice * item.itemCount,
          )}
        />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal-funding__price'],
        )}
      >
        <Text className="text-md" text="현재 펀딩액" />
        <Text
          className="text-md"
          text={priceFilter(
            item.sponsorshipAmount
              ? item.sponsorshipAmount
              : item.fundingAmount,
          )}
        />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal-funding__price'],
        )}
      >
        <Text className="text-md" text="거래 후 펀딩액" />
        <Text
          className="text-md"
          text={priceFilter(
            item.sponsorshipAmount
              ? item.sponsorshipAmount + price
              : item.fundingAmount + price,
          )}
        />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-center',
          styles['modal-funding__button-container'],
        )}
      >
        <Button
          className={convertClassNameList(
            styles['modal-funding__button'],
            colorStyle.bgColorLight,
            colorStyle.textColor,
          )}
          label="취소"
          onClick={closeToggle}
        />
        <Button
          className={convertClassNameList(
            styles['modal-funding__button'],
            'white',
            colorStyle.bgColor,
          )}
          label="펀딩"
          onClick={handleFundingSend}
        />
      </div>
    </div>
  );
};

export default ModalFunding;
