import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/upload" component={UploadPage}></Route>
        <Route path="/signin" component={SignInPage}></Route>
        <Route path="/signup" component={SignUpPage}></Route>

      </main>
    </BrowserRouter>
  );
}

export default App;
