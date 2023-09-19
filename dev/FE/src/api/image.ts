import { api, authApi } from '.';

const getImage = async () => {
  return await api.get(`image`).then(({ data }) => data);
};
const postImage = async (image: string) => {
  return await authApi.post(`image`, image).then(({ data }) => data);
};

export { getImage, postImage };
