import { HashRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./component/LanguageContext";
import Layout from "./templates/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

import ProductsPage from "./pages/ProductsPage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import TechnologyPage from "./pages/TechnologyPage";

import CardHologramPage from "./pages/CardHologramPage";
import SpreadFxGalleryNLP from "./pages/SpreadFxGalleryNLP";
import SpreadFxGallery from "./pages/SpreadFxGallery";

import CardAnchaPage from "./pages/CardAnchaPage";
import CardServicePage from "./pages/CardServicePage";
import BlogPage from "./pages/BlogPage";
import LayoutFooter from "./templates/LayoutFooter";
import { useEffect } from "react";
//import { VITE_BACKEND } from "./constants/environment";

function App() {
  useEffect(() => {
    fetch( "/api/myip");
  }, []);

  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LayoutFooter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/what_we_do" element={<WhatWeDoPage />} />
            <Route path="/technology" element={<TechnologyPage />} />{" "}
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/technology/card_hologram"
              element={<CardHologramPage />}
            />
            <Route path="/technology/card_ancha" element={<CardAnchaPage />} />
            <Route
              path="/technology/spread_fx_gallery_nlp"
              element={<SpreadFxGalleryNLP />}
            />
            <Route
              path="/technology/spread_fx_gallery"
              element={<SpreadFxGallery />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/services/card_service"
              element={<CardServicePage />}
            />
          </Route>

          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
