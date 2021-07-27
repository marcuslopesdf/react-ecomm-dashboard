import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
          <Route path="/update/:id">
            <Protected Cmp={UpdateProduct} />
            {/* <UpdateProduct /> */}
          </Route>
          <Route path="/search">
            <Protected Cmp={SearchProduct} />
            {/* <AddProduct /> */}
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
            {/* <AddProduct /> */}
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
