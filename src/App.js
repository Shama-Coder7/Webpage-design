import './App.css';
// import ClientMaster from './components/clientlist/ClientMaster';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ViewClient from './components/clientlist/ViewClient';

import AddClient from './components/clientlist/AddClient';
import ClientMaster from './components/clientlist/ClientMaster';

function App() {
  return (
    <div className="App">
      {/* <ClientMaster /> */}
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/clientmaster' element={<ClientMaster/>}></Route>

        <Route path='/viewclient' element={<ViewClient />}></Route>
        <Route path='/addclient' element={<AddClient />}></Route>

      </Routes>
     
      </BrowserRouter>
      </div>
  );
}

export default App;
