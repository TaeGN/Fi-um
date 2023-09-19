import { getImage, postImage } from '../image';

// 그림 조회
const getImageQuery = () => {
  return {
    queryKey: ['getImage'],
    queryFn: getImage,
  };
};

// 그림 등록
const postImageQuery = () => {
  return {
    queryKey: ['postImage'],
    queryFn: postImage,
  };
};

export { getImageQuery, postImageQuery };
