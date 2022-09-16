import "./App.css";
import Header from "./Components/Home/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Home/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Favorite from "./Components/Favorite/Favorite";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SignIn from "./Components/SignIn/SignIn";
import { Toaster } from "react-hot-toast";
import RedirectsAuth from "./Hooks/RedirectsAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init.js/firebase.init";

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/favorite" element={<RedirectsAuth>
          <Favorite></Favorite>
        </RedirectsAuth>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster/>
    </div>
  );
}

export default App;
