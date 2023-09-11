import styles from '@/App.module.scss';
import Router from './router/Router';

const App = () => {
  return (
    <div className={['container', styles.app].join(' ')}>
      <Router />
    </div>
  );
};

export default App;
