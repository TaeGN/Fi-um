import { Button, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList, convertUser } from '@/utils';
import styles from './Login.module.scss';
import { useMemo, useState, ChangeEvent } from 'react';
import { UserDetail } from '@/types';

interface LoginProps {
  className?: string;
  signUp?: boolean;
}

const Login = ({ className, signUp }: LoginProps): JSX.Element => {
  const [userInfomation, setUserInformation] = useState<UserDetail>({
    id: '',
    password: '',
    password2: '',
    phonenumber: '',
    name: '',
  });
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userInfomation);
  };

  const handleSignUpClick = () => {
    console.log('');
  };

  const inputList = useMemo(() => {
    const arr = ['id', 'password'];
    if (signUp) {
      arr.push('password2');
      arr.push('name');
      arr.push('phonenumber');
    }
    return arr;
  }, [signUp]);

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
              name={key}
              value={userInfomation[key as keyof UserDetail]}
              onChange={handleChangeValue}
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
        label={!signUp ? '로그인' : '회원가입'}
        onClick={() => {
          console.log(userInfomation);
        }}
      />
    </div>
  );
};

export default Login;
