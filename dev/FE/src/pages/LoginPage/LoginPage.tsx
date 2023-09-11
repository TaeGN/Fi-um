import { Login } from '@/components/organisms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './LoginPage.module.scss';
import { Image } from '@/components/atoms';

interface LoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: LoginPageProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['login-page'],
      )}
    >
      <Image
        className={convertClassNameList(styles['login-page__image'])}
        src="/vite.svg"
        alt="image"
      />
      <Login className={convertClassNameList(styles['login-page__content'])} />
    </div>
  );
};

export default LoginPage;
