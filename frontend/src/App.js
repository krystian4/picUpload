import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/upload" component={UploadPage} exact></Route>

      </main>
    </BrowserRouter>
  );
}

export default App;
