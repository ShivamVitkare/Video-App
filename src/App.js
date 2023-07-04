import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Series from "./pages/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
