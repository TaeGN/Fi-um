import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Image } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { USER_TYPE } from '@/constants';
import { useMemo } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { userInfo } = useAuth();

  const links = useMemo(() => {
    if (!userInfo)
      return (
        <>
          <Link
            className={convertClassNameList(
              styles['navbar__menu--item'],
              styles.login,
            )}
            to={'/login'}
          >
            로그인
          </Link>
          <Link
            className={convertClassNameList(
              styles['navbar__menu--item'],
              styles.signup,
            )}
            to={'/signup'}
          >
            회원가입
          </Link>
        </>
      );

    let links = [
      <>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/stock'}
        >
          주식
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/auction'}
        >
          경매
        </Link>
      </>,
    ];
    switch (userInfo.userType) {
      case USER_TYPE.아이들:
        links.push(
          <Link
            className={convertClassNameList(styles['navbar__menu--item'])}
            to={'/deposit'}
          >
            자산
          </Link>,
        );
        break;
    }
    links.push(
      <Link
        className={convertClassNameList(
          styles['navbar__menu--item'],
          styles.signup,
        )}
        to={`/profile/${userInfo.userId}`}
      >
        프로필
      </Link>,
    );
    return links;
  }, [userInfo]);
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['navbar'],
        'container',
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
          Home
        </Link>

        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/stock'}
        >
          주식
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/auction'}
        >
          경매
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/deposit'}
        >
          자산
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/funding'}
        >
          펀딩
        </Link>
        <Link
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/gallery'}
        >
          사진첩
        </Link>
        <Link
          className={convertClassNameList(
            styles['navbar__menu--item'],
            styles.login,
          )}
          to={'/login'}
        >
          로그인
        </Link>
        <Link
          className={convertClassNameList(
            styles['navbar__menu--item'],
            styles.signup,
          )}
          to={'/signup'}
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
