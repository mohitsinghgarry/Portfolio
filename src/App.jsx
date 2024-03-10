import './App.css'
import NavBar from './components/NavBar';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { ContactUs } from './components/ContactUs';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { BrowserRouter as Router , Routes  , Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path= '/About' Component={About}/>
          <Route path ='/Projects' Component={Projects}/>
          <Route path='/ContactUs' Component={ContactUs} />
        </Routes>
      </Router>
    </div>
  )
    
}

export default App;
