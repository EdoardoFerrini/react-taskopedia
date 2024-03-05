import ReactDOM from 'react-dom/client';
import "../src/css/style.css"
import Student from "./Components/Student/Student"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import MainBody from './Mainbody';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div style={{backgroundColor: "black", color: "grey"}}>
    <Header />
    <div className="px-4"></div>
    <MainBody />
    <Footer />
  </div>
);

