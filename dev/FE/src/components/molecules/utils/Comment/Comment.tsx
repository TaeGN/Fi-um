import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Comment.module.scss';

interface CommentProps {
  className?: string;
}

const Comment = ({ className }: CommentProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      Comment
    </div>
  );
};

export default Comment;
