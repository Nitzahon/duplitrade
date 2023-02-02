import './App.css';

import GraphFrame from './components/GraphFrame/GraphFrame';
import Header from './components/Header/Header';
import Hugbox from './components/Hugbox/Hugbox';
import dataly from './constants/data.json';
function App() {

  const data = dataly;
 
  return (
    <div className="App">
      <div className='container'>
        <Header/>
      <Hugbox />
      <GraphFrame/>
      </div>
    </div>
  );
}

export default App;
