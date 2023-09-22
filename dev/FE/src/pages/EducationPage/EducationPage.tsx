import { convertClassName, convertClassNameList, eduBook } from '@/utils';
import styles from './EducationPage.module.scss';
import { Button } from '@/components/atoms';
import { useCallback, useReducer } from 'react';

interface EducationPageProps {
  className?: string;
}

interface ActionType {
  type: string;
  pageNo?: number;
}

const eduBooks = eduBook();

const reducer = (state: number, action: ActionType): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'CHANGE':
      return action?.pageNo ?? state;
    default:
      return state;
  }
};

interface Index {
  titleNo: number;
  pageNo: number;
  subjectNo: number;
}

class IndexImpl implements Index {
  titleNo: number;
  pageNo: number;
  subjectNo: number;
  constructor(subjectNo: number, titleNo: number, pageNo: number) {
    this.titleNo = titleNo;
    this.pageNo = pageNo;
    this.subjectNo = subjectNo;
  }
}

// const subjectNameList = ['우리는 합리적인 경제인', '우리는 생산성 높은 생산자'];
const indexNameList = [
  '왜 경제를 알아야 하나요?',
  '어른들에게도 부족한 것이 있나요?',
  '부족하지 않은 것도 있나요?',
  '왜 돈을 내고 사야 하나요?',
  '왜 선택해야 하나요?',
  '선택하면 포기해야 한다고요?',
  '동화로 보는 경제: 아기 돼지 삼형제',
];

const indexList: Index[] = [
  new IndexImpl(0, 0, 14),
  new IndexImpl(0, 1, 18),
  new IndexImpl(0, 2, 22),
  new IndexImpl(0, 3, 26),
  new IndexImpl(0, 4, 30),
  new IndexImpl(0, 5, 34),
  new IndexImpl(0, 6, 38),
];

const EducationPage = ({ className }: EducationPageProps): JSX.Element => {
  const [pageNo, dispatch] = useReducer(reducer, 1);

  const handlePageNoIncrement = useCallback(
    () => dispatch({ type: 'INCREMENT' }),
    [],
  );
  const handlePageNoDecrement = useCallback(
    () => dispatch({ type: 'DECREMENT' }),
    [],
  );
  const handlePageNoChange = useCallback(
    (pageNo: number) => () => dispatch({ type: 'CHANGE', pageNo }),
    [],
  );

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['education-page'],
      )}
    >
      <div className={styles['education-page__index']}>
        {indexList.map(({ titleNo, pageNo }) => (
          <Button
            label={indexNameList[titleNo]}
            onClick={handlePageNoChange(pageNo)}
          />
        ))}
      </div>
      <div className={styles['education-page__pagination']}>
        <Button
          className={styles['education-page__pagination--button']}
          label={'이전'}
          onClick={handlePageNoDecrement}
        />
        {pageNo}
        <Button
          className={styles['education-page__pagination--button']}
          label={'다음'}
          onClick={handlePageNoIncrement}
        />
      </div>
      <div className={styles['education-page__image']}>{eduBooks[pageNo]}</div>
    </div>
  );
};

export default EducationPage;
