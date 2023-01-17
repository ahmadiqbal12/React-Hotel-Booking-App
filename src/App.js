import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Lists from './lists/Lists';
import Home from './Pages/home/Home';
import Hotel from './Pages/hotel/Hotel';


function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<Lists/>}/>
    <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
