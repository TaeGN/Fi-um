export const formatCurrency = (value: string): string => {
  const num = parseInt(value, 10);
  return num.toLocaleString('en-US');
};
