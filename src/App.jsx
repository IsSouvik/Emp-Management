
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AddEmp from './admin/AddEmp';
import SentMessaageProject from './admin/SentMessaageProject';

function App() {
  return (
 <Router>
  <Navbar/>
  <Routes>
   <Route path='/adminlogin' element={<AdminLogin/>}/>
   <Route path='/admindashboard' element={<AdminDashboard/>}>
    <Route path='/admindashboard/addemp' element={<AddEmp/>}/>
    <Route path='/admindashboard/sentmessageproject' element={<SentMessaageProject/>}/>
   </Route>
  </Routes>
 </Router>
  );
}

export default App;
