import LoadingBarStart from './UI/LoadingBarStart';

import classes from './SplashScreen.module.css';
import winLogo from '../assets/logo-start.webp';
import MicLogo from '../assets/microsoft-logo.jpg';

const SplashScreen = () => {
  return (
    <div className={classes['layout-starter']}>
      <div className={classes.wrapper}>
        <img src={winLogo} alt="Windows XP Logo - Portafolio" />
        <LoadingBarStart />
        <div className={classes.footer}>
          <h4>Copyright &copy; Carlos Torres</h4>
          <img src={MicLogo} alt='Microsoft Logo' />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;