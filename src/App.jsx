import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import WishList from "./pages/WishList/WishList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
