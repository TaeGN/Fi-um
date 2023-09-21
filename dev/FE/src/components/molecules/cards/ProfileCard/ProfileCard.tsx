import { Button, Image, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileCard.module.scss';
import useModal from '@/hooks/useModal';
import { useState, ChangeEvent } from 'react';
import { putUserProfileImage } from '@/api/user';
import { postImage } from '@/api/image';
import { Modal } from '@/components/molecules';
import useAuth from '@/hooks/useAuth';

interface ProfileCardProps {
  className?: string;
  myPage?: boolean;
  src?: string;
  alt?: string;
}

const ProfileCard = ({ className, myPage, src, alt }: ProfileCardProps) => {
  const { isOpen, openToggle, closeToggle } = useModal();
  const [file, setFile] = useState<File | undefined>(undefined);
  const { userInfo, resetUserInfo } = useAuth();

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile((e.currentTarget.files as FileList)[0]);
    if (file) console.log(URL.createObjectURL(file));
  };

  const handleChangeImage = async () => {
    if (!file) {
      alert('파일을 선택해주세요');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const imagePath = await postImage(formData);

    await putUserProfileImage(imagePath);
    const newUserInfo = userInfo && { data: { ...userInfo, imagePath } };
    sessionStorage.setItem(
      'user',
      newUserInfo ? JSON.stringify(newUserInfo) : '',
    );

    resetUserInfo();
    closeToggle();
  };
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
        <Image
          src={myPage ? userInfo?.imagePath : src}
          alt={myPage ? userInfo?.userName : alt}
        />
      </div>
      <div className={styles.text}>
        <Text text={myPage ? userInfo?.userName : alt} className="text-lg" />
      </div>
      {myPage && (
        <div className={styles.button}>
          <Button
            label="프로필 수정"
            className="gray xsmall"
            onClick={openToggle}
          />
        </div>
      )}
      <Modal isOpen={isOpen} toggle={closeToggle}>
        <div className={styles['profile-card__modal']}>
          <Text
            className={styles['profile-card__modal--title']}
            text="프로필 사진 수정"
          />
          <input
            className={convertClassNameList(
              styles['profile-card__modal--input'],
            )}
            type="file"
            name="file"
            onChange={handleChangeFile}
          />
          <div className={styles['profile-card__modal--button-container']}>
            <Button
              className={convertClassNameList(
                styles['profile-card__modal--button'],
                'bg-red',
                'white',
              )}
              label="취소"
              onClick={closeToggle}
            />
            <Button
              className={convertClassNameList(
                styles['profile-card__modal--button'],
                'bg-blue',
                'white',
              )}
              label="수정"
              onClick={handleChangeImage}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileCard;
