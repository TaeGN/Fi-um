import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Image } from '@/components/atoms';
import useAuth from '@/hooks/useAuth';
import { USER_TYPE } from '@/constants';
import { useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { userLogoutQuery } from '@/api/queries/user';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { userInfo } = useAuth();
  const mutation = useMutation(userLogoutQuery());

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
            key="signup"
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
          key="stock"
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/stock'}
        >
          주식
        </Link>
        <Link
          key="auction"
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
            key="deposit"
            className={convertClassNameList(styles['navbar__menu--item'])}
            to={'/deposit'}
          >
            자산
          </Link>,
        );
        break;
    }
    links.push(
      <>
        <Link
          key="funding"
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/funding'}
        >
          펀딩
        </Link>
        <Link
          key="gallery"
          className={convertClassNameList(styles['navbar__menu--item'])}
          to={'/gallery'}
        >
          사진첩
        </Link>
        <Link
          key="profile"
          className={convertClassNameList(
            styles['navbar__menu--item'],
            styles.login,
          )}
          to={`/profile/${userInfo.userNo}`}
        >
          프로필
        </Link>
        <Link
          key="logout"
          className={convertClassNameList(
            styles['navbar__menu--item'],
            styles.logout,
          )}
          to={false}
          onClick={() => mutation.mutate()}
        >
          로그아웃
        </Link>
      </>,
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

        {links}
      </div>
    </div>
  );
};

export default Navbar;
