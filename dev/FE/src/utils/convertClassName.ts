const convertClassName = (
  className: string | undefined,
  styles: CSSModuleClasses,
): string => {
  return (
    className
      ?.split(' ')
      .map((name) => styles[name] || name)
      .join(' ') ?? ''
  );
};

const convertClassNameList = (...classNameList: string[]): string => {
  return classNameList.join(' ');
};

const checkConditionClassName = (condition: boolean, className: string) => {
  return condition ? className : '';
};
export default convertClassName;
export { convertClassNameList, checkConditionClassName };
