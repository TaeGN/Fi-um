import styles from '@/components/atoms/Title/Title.module.scss';

interface TitleProps {
  text: string;
  textColor?: string;
}

const Title = ({ text, textColor }: TitleProps) => {
  const className: string[] = [styles[textColor ?? 'black']];
  return <h1 className={className.join(' ')}>{text}</h1>;
};

export default Title;
