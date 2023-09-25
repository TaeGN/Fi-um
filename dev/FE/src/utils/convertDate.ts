const DAY = 1000 * 60 * 60 * 24;
const WEEK = DAY * 7;

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
  return Math.ceil(
    (new Date(val + WEEK).getTime() - new Date().getTime()) / DAY,
  );
};

export { convertDate, convertDateAfter7days, convertDataRemainDays };
