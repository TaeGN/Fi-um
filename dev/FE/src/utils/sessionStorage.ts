const setSessionStorageItem = (key: string, value: any) => {
  const user = sessionStorage.getItem('user');
  if (!user) {
    return;
  }

  const { data } = JSON.parse(user);
  const newData = { ...data, [key]: value };
  sessionStorage.setItem('user', JSON.stringify({ data: newData }));
};

const getSessionStorageItem = (key: string) => {
  const user = sessionStorage.getItem('user');
  if (!user) {
    return undefined;
  }

  const { data } = JSON.parse(user);
  return data[key];
};

const getAccessToken = (): string | undefined => {
  return getSessionStorageItem('tokenResponse')?.accessToken;
};

const getRefreshToken = (): string | undefined => {
  return getSessionStorageItem('tokenResponse')?.refreshToken;
};

export {
  setSessionStorageItem,
  getSessionStorageItem,
  getAccessToken,
  getRefreshToken,
};
