const option = {
  maximumFractionDigits: 0,
};

const priceFilter = (price: number): string => {
  return price.toLocaleString('ko-KR', option) + ' 원';
};

export default priceFilter;
