import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { BrowserRouter,Router,Route } from "react-router-dom";


function App() {
  return(
   <> 
   {/* <Home /> */}
    <Register />
    <BrowserRouter>
    <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Register} />
      
    </Router>
    </BrowserRouter>
    </>
  );
}

export default App;
