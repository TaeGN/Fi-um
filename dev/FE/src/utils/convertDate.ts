const DAY = 1000 * 60 * 60 * 24;
const WEEK = DAY * 7;

const getDay = (val: number) => {
  return Math.round(new Date(val).getTime() / DAY);
};

const convertDate = (val: number) => {
  const date = new Date(val);
  if (!val) return '';
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const convertDateAfter7days = (val: number) => {
  const date = new Date(val + WEEK);
  if (!val) return '';
  return `${date.toLocaleDateString()}`;
};

const convertDataRemainDays = (val: number) => {
  if (!val) return '';
  const res = getDay(val + WEEK) - getDay(new Date().getTime());
  return res < 0 ? 0 : res;
};

export { convertDate, convertDateAfter7days, convertDataRemainDays };
