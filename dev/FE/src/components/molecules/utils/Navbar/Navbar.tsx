import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Image } from '@/components/atoms';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['navbar'],
      )}
    >
      <Link className={convertClassNameList(styles['navbar__logo'])} to={'/'}>
        <Image src="/vite.svg" alt="logo" />
      </Link>
      <div className={convertClassNameList(styles['navbar__menu'])}>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/'}
        >
          Home
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/stock'}
        >
          stock
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/auction'}
        >
          auction
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/deposit'}
        >
          deposit
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/funding'}
        >
          funding
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/gallery'}
        >
          gallery
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/login'}
        >
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
