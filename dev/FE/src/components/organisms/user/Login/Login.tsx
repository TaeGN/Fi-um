import { Button, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList, convertUser } from '@/utils';
import styles from './Login.module.scss';
import { useMemo } from 'react';
import { UserDetail } from '@/types';

interface LoginProps {
  className?: string;
  signUp?: boolean;
}

const Login = ({ className, signUp }: LoginProps): JSX.Element => {
  const inputList = useMemo(() => {
    const arr = ['id', 'password'];
    if (signUp) {
      arr.push('password');
      arr.push('phonenumber');
    }
    return arr;
  }, [signUp]);
  console.log(inputList);

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
        text={signUp ? '회원가입' : '로그인'}
      />

      {inputList.map(
        (key): JSX.Element => (
          <div
            key={key}
            className={convertClassNameList(styles['login__item'])}
          >
            <label>
              <Text
                className={convertClassNameList(styles['login__item--label'])}
                text={convertUser(key as keyof UserDetail)}
              />
            </label>
            <input
              className={convertClassNameList(styles['login__item--input'])}
              type="text"
            />
          </div>
        ),
      )}

      <Button
        className={convertClassNameList(
          'bg-blue white',
          styles['login__item'],
          styles['login__item--button'],
        )}
        label="로그인"
        onClick={() => {}}
      />
    </div>
  );
};

export default Login;
