import styles from '@/components/atoms/button/Button.module.scss';
import { convertClassName, convertClassNameList } from '@/utils';
import { MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  value?: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={convertClassNameList(
        convertClassName(className, styles),
        styles.button,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
