import { convertClassName, convertClassNameList } from '@/utils';
import styles from './CreatePage.module.scss';
import { useState } from 'react';
import { Text } from '@/components/atoms';

interface CreatePageProps {
  className?: string;
}

// 사진 등록
// 펀딩 등록
// 갤러리 등록

const CreatePage = ({ className }: CreatePageProps): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob: Blob): Promise<void> => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          const base64Data = event.target.result;
          setImageSrc(base64Data);
          resolve();
        } else {
          return;
        }
      };
    });
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const handleFile = (e: any) => {
    encodeFileToBase64(e.target.files[0]);
  };

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['create-page'],
      )}
    >
      <div>
        <Text className="text-lg" text="제목" />
        <input type="text" value={title} onChange={handleTitle} />
      </div>

      <div>
        <Text className="text-lg" text="내용" />
        <textarea value={description} onChange={handleDescription} />
      </div>

      <h2>사진 업로드</h2>
      <input type="file" onChange={handleFile} />
      <div className="preview">
        {imageSrc && (
          <img className={styles['image']} src={imageSrc} alt="preview-img" />
        )}
      </div>
    </div>
  );
};

export default CreatePage;
