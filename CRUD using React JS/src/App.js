import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Createuser from './routes/createuser/Createuser';
import UserDetailsUI from './routes/userdetailsui/UserDetailsUI';
import EditUser from './routes/editUser/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Createuser />} />
          <Route path="/userdetails" element={<UserDetailsUI />} />
          <Route path="/edituser" element={<EditUser />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
