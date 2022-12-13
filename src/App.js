import './css/App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from './AuthContext';
import Logs from './Logs';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className="App">
      <Header></Header>
      {ctx.isLoggedIn && <Logs></Logs>}
    </div>
  );
}

export default App;
