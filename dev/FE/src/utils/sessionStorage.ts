const getAccessToken = (): string | null => {
  return sessionStorage.getItem('accessToken');
};

const getRefreshToken = async (): Promise<string | null> => {
  return await sessionStorage.getItem('refreshToken');
};
const setAccessToken = (accessToken: string): void => {
  sessionStorage.setItem('accessToken', accessToken);
};

const setRefreshToken = (refreshToken: string): void => {
  sessionStorage.setItem('refreshToken', refreshToken);
};

const removeTokens = (): void => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
};

export {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  removeTokens,
};
