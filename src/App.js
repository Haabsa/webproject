
// import Dashboard from './pages/Dashboard';
// import Details from './pages/Details';
// import Login from './pages/Login';
// import Registor from './pages/Registor';
// import Update from './pages/Update';
// import Add from './pages/Add';
// import View from './pages/View';
// import Header from './component/Header';

// import Footer from "./component/Footer";
import Header from "./component/Header";
import Add from './pages/Add';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from "./component/Dashboard";
import Login from "./pages/Login";
import Details from './pages/Details';
import Footer from "./component/Footer";
function App() {
  return (
    <div>
    {/* <Header />
    <l   <Footer /> */}
    {/* <BrowserRouter> */}
  {/* <Header/> */}
  {/* <Add/> */}
  {/* <Details/> */}
  {/* <Dashboard/> */}
   {/* <View/> */}
{/* <Login/> */}
{/* <Registor/> */}
{/* <Update/> */}
{/* <Footer/> */}

<Router> 

<Header/>
   <Routes> 
   
      <Route path='/' element={<Login/>}/> 
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/tea' element={<Add/>}
      //  
      />
      
     </Routes> 
</Router>
<Footer/>

    {/* </BrowserRouter> */}


    </div>
   
  );
}

export default App;
