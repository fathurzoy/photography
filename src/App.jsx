import "antd/dist/antd.css";
import "assets/css/style.css";
import Blog from "pages/blog/Blog";
import ContactUs from "pages/contactUs/ContactUs";
import Home from "pages/home/Home";
import Prewedding from "pages/prewedding/Prewedding";
import Pricelist from "pages/pricelist/Pricelist";
import Videos from "pages/videos/Videos";
import Wedding from "pages/wedding/Wedding";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/contact-us">
            <>
              <ContactUs />
            </>
          </Route>
          <Route path="/pricelist">
            <>
              <Pricelist />
            </>
          </Route>
          <Route path="/blog">
            <>
              <Blog />
            </>
          </Route>
          <Route path="/videos">
            <>
              <Videos />
            </>
          </Route>
          <Route path="/prewedding">
            <>
              <Prewedding />
            </>
          </Route>
          <Route path="/wedding">
            <>
              <Wedding />
            </>
          </Route>
          <Route path="/">
            <>
              <Home />
            </>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
