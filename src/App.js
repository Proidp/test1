import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import './main.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profilepage from "./Pages/Profilepage";
import PlayVideo from "./Pages/PlayVideo";
import Signup from "./Pages/Signup";
import './style.css';
import Settings from "./Pages/Settings";
import Wallet from "./Pages/Wallet";
import Lists from "./Pages/Lists";
import Upload from "./Pages/Upload";
import Education from "./Pages/Education";
import CreativeArts from "./Pages/CreativeArts";
import TheUniverse from "./Pages/TheUniverse";
import Gaming from "./Pages/Gaming";
import Music from "./Pages/Music";
import Tech from "./Pages/Tech";
import Finance from "./Pages/Finance";
import Popculture from "./Pages/Popculture";
import Following from "./Pages/Following";
import NewsPolitics from "./Pages/NewsPolitics";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profilepage/>
        </Route>
        <Route path="/playvideo">
          <PlayVideo/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/wallet">
          <Wallet/>
        </Route>
        <Route path="/lists">
          <Lists/>
        </Route>
        <Route path="/upload">
          <Upload/>
        </Route>
        <Route path="/education">
          <Education/>
        </Route>
        <Route path="/arts">
          <CreativeArts/>
        </Route>
        <Route path="/universe">
          <TheUniverse/>
        </Route>
        <Route path="/gaming">
          <Gaming/>
        </Route>
        <Route path="/music">
          <Music/>
        </Route>
        <Route path="/tech">
          <Tech/>
        </Route>
        <Route path="/finance">
          <Finance/>
        </Route>
        <Route path="/popculture">
          <Popculture/>
        </Route>
        <Route path="/following">
          <Following/>
        </Route>
        <Route path="/news">
          <NewsPolitics/>
        </Route>
        <Route path="/wildwest">
          <Education/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
