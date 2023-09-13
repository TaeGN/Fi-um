const imgUrl = (url: string): string => {
  return url ? import.meta.env.BASE_URL + 'img/' + url : '';
};

const bankIconUrl = (url: string): string => {
  return url ? import.meta.env.BASE_URL + 'img/bankicon/' + url : '';
};

export { imgUrl, bankIconUrl };
