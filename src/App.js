import { Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { About } from "./pages/About/About";
import { Footer } from "./widgets/Footer/Footer";
import { Header } from "./widgets/Header/Header";

export default function App() {
    return (
        <>
            <Header />
            <main className="flex-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}