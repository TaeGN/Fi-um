import { Button, Image, Text } from '@/components/atoms';
import { convertClassName } from '@/utils';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
  onClick?: () => void;
  userCheck?: boolean;
}

const ProfileCard = ({
  src,
  alt,
  text,
  className,
  onClick,
  userCheck,
}: ProfileCardProps) => {
  return (
    <div
      // style={{
      //   width: '25%',
      // }}
      className={`${styles.profileCard} ${convertClassName(className, styles)}`}
    >
      <div className={styles.image}>
        <Image src={src} alt={alt} />
      </div>
      <div className={styles.text}>
        <Text text={text} className="text-lg" />
      </div>
      {userCheck && (
        <div className={styles.button}>
          <Button label="정보 수정" className="gray xsmall" onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
