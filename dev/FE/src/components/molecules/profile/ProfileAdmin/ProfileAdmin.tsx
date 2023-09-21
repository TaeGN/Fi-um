import { FundingBar } from '@/components/molecules';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileAdmin.module.scss';
import { getFundingProgressQuery } from '@/api/queries';
import { useQuery } from '@tanstack/react-query';
import { FundingProgress } from '@/types';
import { useMemo } from 'react';

interface ProfileAdminProps {
  className?: string;
}

const ProfileAdmin = ({ className }: ProfileAdminProps): JSX.Element => {
  const { data: fundingProgress } = useQuery<FundingProgress>(
    getFundingProgressQuery(),
  );

  const ratio = useMemo(() => {
    if (!fundingProgress) return 0;
    return fundingProgress.fundingPrice / fundingProgress.totalFundingPrice;
  }, [fundingProgress]);

  console.log(ratio);

  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        'card-container')
      }
    >
      <FundingBar ratio={ratio} itemUnitPrice={0} fundingAmount={0} />
    </div>
  );
};

export default ProfileAdmin;
