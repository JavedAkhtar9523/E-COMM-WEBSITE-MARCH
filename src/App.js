import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './component/main/main';
import Cart from './component/cart/cart';
// import './src./app.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
