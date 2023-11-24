import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
    <h1 className={styles.title}>
      <span className={styles.subtitle}> Weather</span>
      Forecast
    </h1>
    </div>
  );
};

export default Header;