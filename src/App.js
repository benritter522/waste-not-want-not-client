import './App.css';

import SearchResultsList from './Components/SearchResultsList';
import Map from './Components/Map';

function App() {
  return (
    <div className="App">
      <h1>Waste Not Want Not</h1>
      <div className="MapAndSearchResults" style={{display: 'flex', justifyContent: 'center'}}>
        <SearchResultsList />
        <Map />
      </div>
    </div>
  );
}

export default App;
