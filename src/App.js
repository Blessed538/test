import './App.css';
import {React,useState} from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navigation/Navbar';
import Dashboard from './Components/Main/Main'
import SideNav from './Components/SideNav/SideNav'

function App() {  
  const [collapse, setCollapse]  = useState({value: true})

  return (
    <div className="h-100">
      <Header  collapse={collapse} setCollapse={setCollapse}/>
      <main class="h-100">
          <div className="container- bg-white h-100">
              <div className="d-flex pt-2 pl-3 pr-4 h-100">
                  <SideNav setCollapse={setCollapse}  collapse={collapse} />
                  <Dashboard />
                </div>
          </div>
      </main>            
    </div>    
  );
}

export default App;
