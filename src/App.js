import './App.scss';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
  
      <div className="App-left">
        <Sidebar />
      </div>
  
      <div className="App-right">
        <Header />
        <Content />
      </div>

    </div>
  );
}

export default App;
