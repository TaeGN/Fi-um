const convertClassName = (
  className: string | undefined,
  styles: CSSModuleClasses,
) => {
  return className
    ?.split(' ')
    .map((name) => styles[name] || name)
    .join(' ');
};

export default convertClassName;
