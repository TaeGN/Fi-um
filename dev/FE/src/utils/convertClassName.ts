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

export default convertClassName;
export { convertClassNameList };
