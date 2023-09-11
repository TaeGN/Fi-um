import { convertClassName, convertClassNameList } from '@/utils';
import styles from './DepositPage.module.scss';

interface DepositPageProps {
  className?: string;
}

const DepositPage = ({ className }: DepositPageProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(convertClassName(className, styles))}
    ></div>
  );
};

export default DepositPage;
