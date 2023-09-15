import { getUserArtist, getUserTotalCapital } from '../user';

const getUserArtistQuery = (userNo: string) => {
  return {
    queryKey: ['getArtist', userNo],
    queryFn: getUserArtist,
  };
};

const getUserTotalCapitalQuery = () => {
  return {
    queryKey: ['getTotalCapital'],
    queryFn: getUserTotalCapital,
  };
};

export { getUserArtistQuery, getUserTotalCapitalQuery };
