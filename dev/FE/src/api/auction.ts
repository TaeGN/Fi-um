import { api } from '.';

const getAuctions = async () => {
  return await api.get('auction').then(({ data }) => data);
};

export { getAuctions };
