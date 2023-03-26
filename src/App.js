import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom"
import Home from "./components/home";
import GraphicalView from "./components/graph";
import ErrorPage from "./components/404";
import Exchange from "./components/exchange";




function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/graph" element={<GraphicalView/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
