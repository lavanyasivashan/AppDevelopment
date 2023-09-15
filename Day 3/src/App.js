import{BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './login';
import Register from './register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;