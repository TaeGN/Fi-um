import { convertClassName, convertClassNameList } from '@/utils';
import styles from './CreatePage.module.scss';

interface CreatePageProps {
  className?: string;
}

// 사진 등록
// 펀딩 등록
// 갤러리 등록

const CreatePage = ({ className }: CreatePageProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <input className="block" type="text" name="" id="" />
      <textarea className="block" />
      <input className="block" type="file" name="" id="" />
    </div>
  );
};

export default CreatePage;
