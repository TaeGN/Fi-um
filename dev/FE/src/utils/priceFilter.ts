const option = {
  maximumFractionDigits: 0,
};

const priceFilter = (price?: number | null): string => {
  if (!price) return '0원';
  return price.toLocaleString('ko-KR', option) + '원';
};

export default priceFilter;
