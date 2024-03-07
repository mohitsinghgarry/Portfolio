import './App.css'
import NavBar from './components/NavBar';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import { ContactUs } from './ContactUs';
import { Projects } from './components/Projects';
import { BrowserRouter as Router , Routes  , Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/ContactUs' Component={ContactUs} />
          <Route path ='/Projects' Component={Projects}/>
        </Routes>
      </Router>
    </div>
  )
    
}

export default App;
