import './App.css';
import Banner from './Components/banner';
import ParentComp from './Components/ParentCom';
import Client from './Components/Client';
function App() {
  return (
    <div className="App">
      <Banner/>
      <ParentComp/>
      <Client/>
    </div>
  );
}

export default App;
