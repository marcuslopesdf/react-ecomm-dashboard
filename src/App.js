import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        {/* <h1>Ecomm Project</h1> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
            {/* <AddProduct /> */}
          </Route>
          <Route path="/update">
            <Protected Cmp={UpdateProduct} />
            {/* <UpdateProduct /> */}
          </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
