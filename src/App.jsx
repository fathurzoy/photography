import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "assets/css/style.css";
import Footer from "components/Footer/Footer";
import Home from "pages/home/Home";
import "antd/dist/antd.css";
import Wedding from "pages/wedding/Wedding";
import Prewedding from "pages/prewedding/Prewedding";
import Videos from "pages/videos/Videos";
import ContactUs from "pages/contactUs/ContactUs";
import Pricelist from "pages/pricelist/Pricelist";
import Blog from "pages/blog/Blog";

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
