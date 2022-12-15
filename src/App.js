import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
  </div>
);
}

export default App;
