import { Button, Image, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
  onClick?: () => void;
  userCheck?: boolean;
}

// const ProfileCard = ({ alt, text, className, myPage }: ProfileCardProps) => {
//   const { isOpen, openToggle, closeToggle } = useModal();
//   const [file, setFile] = useState<File | undefined>(undefined);
//   const { userInfo, setUserInfo } = useAuth();

//   const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
//     setFile((e.currentTarget.files as FileList)[0]);
//     if (file) console.log(URL.createObjectURL(file));
//   };

//   const handleChangeImage = async () => {
//     if (!file) {
//       alert('파일을 선택해주세요');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     const imagePath = await postImage(formData);

//     await putUserProfileImage(imagePath);
//     setUserInfo((userInfo) => {
//       return userInfo && { ...userInfo, imagePath };
//     });

//     sessionStorage.setItem('user', userInfo ? JSON.stringify(userInfo) : '');
//     // closeToggle();
//   };

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
      className={`${styles['profile-card']} ${convertClassName(
        className,
        styles,
      )}`}
    >
      <div
        className={convertClassNameList(
          styles.image,
          styles['profile-card__image'],
        )}
      >
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
