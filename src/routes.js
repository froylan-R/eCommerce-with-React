import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"

export default function Routing() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="src/static html pages/index.html">Home</Link>
            </li>
            <li>
              <Link to="/">products</Link>
            </li>
            <li>
              <Link to="src/static html pages/contact.html">contacts</Link>
            </li>
          </ul>
  
          <hr />
  
          <Switch>
            <Route exact path="src/static html pages/index.html">
              <Home />
            </Route>
            <Route path="/">
              <Products />
            </Route>
            <Route path="src/static html pages/contact.html">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function Products() {
    return (
      <div>
        <h2>Products</h2>
      </div>
    );
  }
  
  function Contacts() {
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
  }
  

