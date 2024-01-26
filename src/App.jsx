import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import WishList from "./pages/WishList/WishList";
import SingleItem from "./components/SingleItem/SingleItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name/:pageName" element={<WishList />} />
        <Route path="/gifts/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
