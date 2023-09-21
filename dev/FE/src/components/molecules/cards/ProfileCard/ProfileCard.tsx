import { Button, Image, Text } from '@/components/atoms';
import { convertClassName } from '@/utils';
import styles from './ProfileCard.module.scss';
import { Modal } from '@/components/molecules';
import useModal from '@/hooks/useModal';
import { useState, ChangeEvent, useCallback } from 'react';
import { postImage } from '@/api/image';
import { putUserProfileImage } from '@/api/user';
import useAuth from '@/hooks/useAuth';

interface ProfileCardProps {
  src?: string;
  alt: string;
  text: string;
  className?: string;
  myPage?: boolean;
}

const ProfileCard = ({ alt, text, className, myPage }: ProfileCardProps) => {
  const { isOpen, openToggle, closeToggle } = useModal();
  const [file, setFile] = useState<File | undefined>(undefined);
  const { userInfo, setUserInfo } = useAuth();

  const handleChangeFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile((e.currentTarget.files as FileList)[0]);
    if (file) console.log(URL.createObjectURL(file));
  }, []);

  const handleChangeImage = useCallback(async () => {
    if (!file) {
      alert('파일을 선택해주세요');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const imagePath = await postImage(formData);

    await putUserProfileImage(imagePath);
    setUserInfo((userInfo) => {
      return userInfo && { ...userInfo, imagePath };
    });

    sessionStorage.setItem('user', userInfo ? JSON.stringify(userInfo) : '');
    closeToggle();
  }, []);

  return (
    <div
      className={`${styles.profileCard} ${convertClassName(className, styles)}`}
    >
      <div className={styles.image}>
        <Image src={userInfo?.imagePath ?? ''} alt={alt} />
      </div>
      <div className={styles.text}>
        <Text text={text} className="text-lg" />
      </div>
      {myPage && (
        <div className={styles.button}>
          <Button
            label="정보 수정"
            className="gray xsmall"
            onClick={openToggle}
          />
        </div>
      )}
      <Modal isOpen={isOpen} toggle={closeToggle}>
        <div>
          <input type="file" name="file" onChange={handleChangeFile} />
          <Button label="취소" onClick={closeToggle} />
          <Button label="수정" onClick={handleChangeImage} />
          {file && <img src={URL.createObjectURL(file)} alt={alt} />}
        </div>
      </Modal>
    </div>
  );
};

export default ProfileCard;
