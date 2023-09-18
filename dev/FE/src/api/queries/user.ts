import {
  getUserArtist,
  getUser,
  getUserTotalCapital,
  // getUserCheckId,
  // userSignup,
  // userLogin,
} from '../user';

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

const getUserQuery = () => {
  return {
    queryKey: ['getUser'],
    queryFn: getUser,
  };
};

export {
  getUserArtistQuery,
  getUserQuery,
  getUserTotalCapitalQuery,
  // getUserCheckIdQuery,
  // userSignupQuery,
  // userLoginQuery,
};