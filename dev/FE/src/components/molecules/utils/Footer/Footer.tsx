import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles.footer,
        'container',
      )}
    >
      Footer
    </div>
  );
};

export default Footer;
