import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Suport from "./components/Suport";
import About from "./components/About";
import Labs from "./components/Labs";
import MainHeader from "./components/MainHeader";
import NotFound from "./components/NotFound";
import { Link, NavLink } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><NavLink to="/" >Home</NavLink></li>

          <li><NavLink to="/about" >about</NavLink></li>

          <li><NavLink to="/support" >support</NavLink></li>
          <li><NavLink to="/labs" >labs</NavLink></li>
        </ul>
      </nav>




      <Routes>
        <Route path="/" element={<MainHeader/>} >

          // this becomes default router
          <Route index element={<Home/>} />

          <Route path="/support" element={<Suport />} />

          <Route path="/about" element={<About />} />

          <Route path="/labs" element={<Labs />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
