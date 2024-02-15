import './AppFooter.scss';

const AppFooter = () => {
  return (
    <footer className="app__footer">
      <p>
        Powered by{' '}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </p>
    </footer>
  );
};

export default AppFooter;
