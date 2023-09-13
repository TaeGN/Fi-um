import { FundingBar } from '@/components/molecules';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileAdmin.module.scss';

interface ProfileAdminProps {
  className?: string;
}

const ProfileAdmin = ({ className }: ProfileAdminProps): JSX.Element => {
  return (
    <div
      style={{
        width: '75%',
      }}
      className={
        (convertClassNameList(convertClassName(className, styles)),
        'card-container')
      }
    >
      <FundingBar ratio={50} />
    </div>
  );
};

export default ProfileAdmin;
