import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <nav className="top-menu">
            <ul className="top-menu-items">
              <li>
                <Link to="#top" target="_self">
                  Эхлэх
                </Link>
              </li>
              <li>
                <Link to="#top" target="_blank">
                  Тун удахгүй
                </Link>
              </li>
              <li>
                <Link to="#top" target="_blank">
                  Захиалага
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/movie/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
