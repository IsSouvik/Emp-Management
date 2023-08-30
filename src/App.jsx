import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import AdminLogin from "./admin/AdminLogin";
import AddEmp from "./admin/AddEmp";
import SentMessaageProject from "./admin/SentMessaageProject";
import AdminHome from "./admin/AdminHome";
import ViewAttendence from "./admin/ViewAttendence";
import ViewMessage from "./admin/ViewMessage";
import ViewEmp from "./admin/ViewEmp";
import UserLogin from "./user/UserLogin";
import UserHome from "./user/UserHome";
import UserAttendence from "./user/UserAttendence";
import UserMessage from "./user/UserMessage";
import AddProject from "./user/AddProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/user/userhome" element={<UserHome />} />
        <Route path="/user/attendence" element={<UserAttendence />} />
        <Route path="/user/message" element={<UserMessage />} />
        <Route path="/user/addproject" element={<AddProject />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/adminhome" element={<AdminHome />} />
        <Route path="/admin/viewattendence" element={<ViewAttendence />} />
        <Route path="/admin/viewmessage" element={<ViewMessage />} />
        <Route path="/admin/addemp" element={<AddEmp />} />
        <Route path="/admin/viewemp" element={<ViewEmp />} />
        <Route path="/admin/sentmessageproject" element={<SentMessaageProject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
