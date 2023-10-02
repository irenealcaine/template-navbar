import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
