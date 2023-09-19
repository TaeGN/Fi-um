import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './ModalFunding.module.scss';
import { Button, Text } from '@/components/atoms';
import { ChangeEvent, MouseEvent, useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

interface ModalFundingProps {
  className?: string;
  onClick?: () => void;
  closeToggle?: () => void;
}

// 나중에 props로 대체 예정
const ratioList = [1, 5, 10, 100];
const totalCount = 12;
const price = 10000;

const ModalFunding = ({
  className,
  onClick,
  closeToggle,
}: ModalFundingProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const colorStyle = useMemo(() => {
    return {
      textColor: 'blue',
      bgColor: 'bg-blue',
      bgColorLight: 'bg-skyblue',
    };
  }, []);

  // 주문 수량 변동 함수
  const handleChangeCount = useCallback(
    (
      e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    ): void => {
      const newCount = Number(e.currentTarget.value);
      if (newCount > totalCount || newCount < 0) return;
      setCount(newCount);
    },
    [totalCount],
  );

  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        styles['modal-stock'])
      }
    >
      <div
        className={convertClassNameList(
          styles['modal-stock__title'],
          'flex-container',
        )}
      >
        <Text
          className={convertClassNameList('text-xl', colorStyle.textColor)}
          text="펀딩"
        />
      </div>

      <div
        className={convertClassNameList(styles['modal-stock__input-container'])}
      >
        <input
          className={convertClassNameList(styles['modal-stock__input'])}
          type="number"
          name="count"
          value={count}
          onChange={handleChangeCount}
        />
        <Text
          className={convertClassNameList(
            'text-sm',
            styles['modal-stock__input--text'],
          )}
          text="&nbsp;원"
        />
        <div
          className={convertClassNameList(
            styles['modal-stock__input--button-container'],
          )}
        >
          <Button
            className={convertClassNameList(
              styles['modal-stock__input--button'],
            )}
            label={<FontAwesomeIcon icon={faChevronUp} size="xs" />}
            value={count + 1}
            onClick={handleChangeCount}
          />
          <Button
            className={convertClassNameList(
              styles['modal-stock__input--button'],
            )}
            label={<FontAwesomeIcon icon={faChevronDown} size="xs" />}
            value={count - 1}
            onClick={handleChangeCount}
          />
        </div>
      </div>

      <div className="flex-container jc-space-between">
        {/* % 버튼들 */}
        {ratioList.map(
          (ratio: number): JSX.Element => (
            <Button
              className={convertClassNameList(
                styles['modal-stock__button'],
                'bg-gray-light',
              )}
              label={priceFilter(ratio * 10000)}
              value={String(Math.floor((totalCount * ratio) / 100))}
              onClick={handleChangeCount}
            />
          ),
        )}
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal-stock__price'],
        )}
      >
        <Text className="text-md" text="현재 잔액" />
        <Text className="text-md" text={priceFilter(price)} />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-space-between',
          styles['modal-stock__price'],
        )}
      >
        <Text className="text-md" text="거래 후 잔액" />
        <Text className="text-md" text={priceFilter(price * count)} />
      </div>

      <div
        className={convertClassNameList(
          'flex-container jc-center',
          styles['modal-stock__button-container'],
        )}
      >
        <Button
          className={convertClassNameList(
            styles['modal-stock__button'],
            colorStyle.bgColorLight,
            colorStyle.textColor,
          )}
          label="취소"
          onClick={closeToggle}
        />
        <Button
          className={convertClassNameList(
            styles['modal-stock__button'],
            'white',
            colorStyle.bgColor,
          )}
          label="펀딩"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ModalFunding;
