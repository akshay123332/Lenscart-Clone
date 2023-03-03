import './App.css';
import Menspage from './Pages/Menspage';

import Homepage from './Pages/Homepage';
import CartA from './Pages/Cart/CartA';

// import Checkout from './Pages/Checkout/Checkout';

import Sunglasses from './Pages/Sunglasses/Sunglasses';
import Computerglasses from './Pages/ComputerGlasses/Computerglasses';

import AllRoutes from './Routes/AllRoutes';

import Loader from './Components/Loader';
// import Multistep from './Pages/ComputerGlasses/Checkout/Checkout';
import Eyeglasses from './Pages/Eyeglasses/Eyeglasses';
import Cartnew from './Pages/Cart/Cartnew';





function App() {
  return (
    <div className="App">
{/* <Multistep/> */}
     
       {/* <Menspage/> */}

   
       <AllRoutes/>

{/*     
<Loader/> */}

      {/* <Homepage/> */}

      {/* <CartA/> */}
      {/* <Checkout/> */}


      {/* <Computerglasses/> */}
      {/* <CartA/> */}
      {/* <Eyeglasses/> */}

     </div>

  );
}

export default App;
