import styles from '@/components/atoms/button/Button.module.scss';
import { convertClassName } from '@/utils';
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
    <button className={convertClassName(className, styles)} {...props}>
      {label}
    </button>
  );
};

export default Button;
