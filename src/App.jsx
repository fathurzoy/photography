import "assets/css/style.css";
import Blog from "pages/blog/Blog";
import ContactUs from "pages/contactUs/ContactUs";
import Detail from "pages/detail/Detail";
import Home from "pages/home/Home";
import NotFound from "pages/notFound/404";
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
          <Route path="/detail">
            <>
              <Detail />
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
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
