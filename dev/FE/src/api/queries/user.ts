import {
  getUserArtist,
  getUser,
  getUserTotalCapital,
  getUserCapital,
  userLogout,
  getUserDepositSaving,
  // getUserCheckId,
  // userSignup,
  // userLogin,
} from '../user';

const getUserArtistQuery = (userNo: number) => {
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

// 특정 아이의 재무 상태표
const getUserCapitalQuery = (userNo: number) => {
  return {
    queryKey: ['getUserCapital', userNo],
    queryFn: getUserCapital,
  };
};

// 자신의 현재 예적금 조회
const getUserDepositSavingQuery = () => {
  return {
    queryKey: ['getUserDepositSaving'],
    queryFn: getUserDepositSaving,
  };
};

// logout
const userLogoutQuery = () => {
  return {
    mutationFn: userLogout,
  };
};

export {
  getUserArtistQuery,
  getUserQuery,
  getUserTotalCapitalQuery,
  getUserCapitalQuery,
  userLogoutQuery,
  getUserDepositSavingQuery,
  // getUserCheckIdQuery,
  // userSignupQuery,
  // userLoginQuery,
};
