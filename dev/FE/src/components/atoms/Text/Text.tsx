import styles from '@/components/atoms/Text/Text.module.scss';
import { convertClassName } from '@/utils';

interface TextProps {
  className?: string;
  text: string;
}

const Text = ({ text, className }: TextProps) => {
  return <div className={convertClassName(className, styles)}>{text}</div>;
};

export default Text;
