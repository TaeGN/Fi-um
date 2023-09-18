import { convertClassName, convertClassNameList, imgUrl } from '@/utils';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Image, Text } from '@/components/atoms';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['navbar'],
        'container jc-space-between',
      )}
    >
      <Link className={convertClassNameList(styles['navbar__logo'])} to={'/'}>
        <Image src="/lotus.png" alt="logo" />
      </Link>
      <div className={convertClassNameList(styles['navbar__menu'])}>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/'}
        >
          <div className="flex-container-col align-center m-1">
            <img
              style={{ width: '30px', height: '30px' }}
              src={imgUrl('navbaricon/home.png')}
              alt=""
            />
            <Text className="text-lg" text="Home" />
          </div>
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/deposit'}
        >
          <div className="flex-container-col align-center m-1">
            <img
              style={{ width: '30px', height: '30px' }}
              src={imgUrl('navbaricon/deposit.png')}
              alt=""
            />
            <Text className="text-lg" text="자산" />
          </div>
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/stock'}
        >
          <div className="flex-container-col align-center m-1">
            <img
              style={{ width: '30px', height: '30px' }}
              src={imgUrl('navbaricon/stock.png')}
              alt=""
            />
            <Text className="text-lg" text="주식" />
          </div>
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/funding'}
        >
          <div className="flex-container-col align-center m-1">
            <img
              style={{ width: '30px', height: '30px' }}
              src={imgUrl('navbaricon/funding.png')}
              alt=""
            />
            <Text className="text-lg" text="펀딩" />
          </div>
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/auction'}
        >
          <div className="flex-container-col align-center m-1">
            <img
              style={{ width: '30px', height: '30px' }}
              src={imgUrl('navbaricon/auction.png')}
              alt=""
            />
            <Text className="text-lg" text="경매" />
          </div>
        </Link>

        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/gallery'}
        >
          <div className="flex-container-col align-center m-1">
            <img
              style={{ width: '30px', height: '30px' }}
              src={imgUrl('navbaricon/gallery.png')}
              alt=""
            />
            <Text className="text-lg" text="갤러리" />
          </div>
        </Link>
        <Link
          className={convertClassNameList(
            styles['navbar__menu--item'],
            styles.login,
          )}
          to={'/login'}
        >
          <Text className="text-lg" text="로그인" />
        </Link>
        <Link
          className={convertClassNameList(
            styles['navbar__menu--item'],
            styles.signup,
          )}
          to={'/signup'}
        >
          <Text className="text-lg" text="회원가입" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
