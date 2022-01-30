import "./App.css";
import OnePage from "./pages/onepage";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signinpage from "./pages/sign_in_page/signinpage";
import Signuppage from "./pages/sign_up_page/signuppage";
import Aboutus from "./pages/About Us/aboutus";
import homepage from "./pages/secondhomepage/homepage";
import Blog from "./pages/Blog/blog";
import Searchpage from "./pages/Searchpage/searchpage";
import FAQ from "./pages/FAQ/faq";
import Albums from "./pages/NFTAlbum/album";

import MarketPlace from "./pages/MarketPlace/MarketPlacePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signinpage} />
          <Route exact path="/signup" component={Signuppage} />
          <Route exact path="/home" component={homepage} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/search" component={Searchpage} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/album" component={Albums} />
          <Route exact path="/market" component={MarketPlace} />

          <div>
            <Router>
              <OnePage />
            </Router>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
