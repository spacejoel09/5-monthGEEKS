import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from './components/WeatherSearch';
import WeatherList from './components/WeatherList';

function App() {
  return (

    <div className='app'>
      <h1>Weather App</h1>
        <WeatherSearch/>
        <WeatherList/>
    </div>
  );
}

export default App;
