import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Activities from './components/Activities/Activities';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div >
      <Header></Header>
      <Activities></Activities>
    </div>
  );
}

export default App;
