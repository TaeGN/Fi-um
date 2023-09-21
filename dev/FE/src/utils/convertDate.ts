const convertDate = (val: number) => {
  const date = new Date(val);
  if (!val) return '';
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export { convertDate };
