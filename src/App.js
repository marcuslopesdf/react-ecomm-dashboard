import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Ecomm Project</h1>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/update">
            <UpdateProduct />
          </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
