import { Button, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Login.module.scss';

interface LoginProps {
  className?: string;
}

const Login = ({ className }: LoginProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['login'],
      )}
    >
      <Text
        className={convertClassNameList(
          'text-md',
          styles['login__item'],
          styles['login__item--title'],
        )}
        text="로그인"
      />
      <div className={convertClassNameList(styles['login__item'])}>
        <label>
          <Text
            className={convertClassNameList(styles['login__item--label'])}
            text="아이디"
          />
        </label>
        <input
          className={convertClassNameList(styles['login__item--input'])}
          type="text"
        />
      </div>
      <div className={convertClassNameList(styles['login__item'])}>
        <label>
          <Text
            className={convertClassNameList(styles['login__item--label'])}
            text="패스워드"
          />
        </label>
        <input
          className={convertClassNameList(styles['login__item--input'])}
          type="text"
        />
      </div>
      <Button
        className={convertClassNameList(
          'bg-blue white',
          styles['login__item'],
          styles['login__item--button'],
        )}
        label="로그인"
        onClick={() => {
          console.log('로그인');
        }}
      />
    </div>
  );
};

export default Login;
