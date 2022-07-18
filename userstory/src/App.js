import InventoryGrid from './components/InventoryGrid';
import Sidebar from './components/Sidebar';
import './App.css';
import Notification from './components/Alert';
import InventoryGrid2 from './components/InventoryGrid2'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Notification></Notification>
          <Sidebar></Sidebar>
          <InventoryGrid2></InventoryGrid2>
      </header>
    </div>
  );
}

export default App;
