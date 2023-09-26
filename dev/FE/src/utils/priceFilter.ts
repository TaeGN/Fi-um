const option = {
  maximumFractionDigits: 0,
};

const priceFilter = (price?: number | null): string => {
  if (!price) return '0원';
  return price.toLocaleString('ko-KR', option) + '원';
};

const priceFilterPlus = (price?: number | null): string => {
  if (!price) return '0원';
  const res = price.toLocaleString('ko-KR', option) + '원';
  return price > 0 ? `+${res}` : res;
};

export default priceFilter;
export { priceFilterPlus };
