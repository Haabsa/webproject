import Registor from './pages/Registor';
// import Header from "./component/NavBar";
import Add from './pages/Add';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from "./component/Dashboard";
import Login from "./pages/Login";
import Details from './pages/Details';
import Footer from "./component/Footer";
import NavBar from './component/NavBar';
import Update from './pages/Update';
import View from './pages/View';
function App() {
  return (

    <div>
    <Router>
    <NavBar/>
    {/* <Registor/> */}
    {/* <Dashboard/> */}
    {/* <Update/> */}
    {/* <Details/> */}
    {/* <Add/> */}
  
    {/* <Login/> */}
    {/* <Update/> */}
    {/* <Add/> */}
    {/* <View/> */}

    <Routes> 
    {/* <Route path='/' element={<Details/>}/>  */}
    
      <Route path='/detail' element={<Details/>}/> 
      <Route path='/' element={<Login/>}/> 
      <Route path='/futa' element={<Details/>}/>
      <Route path='/dash' element={<Details/>}/>
      <Route path='/tea' element={<Add/>}/>
      <Route path='/st' element={<Details/>}/>
      <Route path='/logout' element={<Login/>}/>
      <Route path='/login2' element={<Registor/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/registorS' element={<Add/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Registor/>}/>
      <Route path='/edit' element={<Details/>}/>
      {/* <Route path='/update' element={<Update/>}/> */}
      <Route path='/update/:teacherID' element={<Update/>}/>

      
      

       {/* <Route path='/reg' element={<Registor/>}/> */}
     {/* <Route path='/st' element={<Details/>}/>
      <Route path='/update' element={<Update/>}/>  */}
      {/* <Route path='/registor' element={<Add/>}/> */}
         {/* <Route path='/tea' element={<Add/>}/> */}
         {/* <Route path='/reg' element={<Registor/>}/> */}


    </Routes>


    </Router>
    <Footer/>

     </div>
  );
}

export default App;
