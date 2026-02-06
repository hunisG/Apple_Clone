import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert"
import ProductHighlights from "./components/ProductHighlights/ProductHighlights";
import SplitSection from "./components/SplitSection/SplitSection";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos";

import Iphone from "./components/IphonePage/Iphone";
import SingleAppleProduct from "./components/SingleProduct/SingleAppleProduct";

import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Alert />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductHighlights />
              <SplitSection />
              {/* <YoutubeVideos /> */}
            </>
          }
        />

        <Route path="/iphone" element={<Iphone />} />

        <Route path="/iphone/:id" element={<SingleAppleProduct />} />
      </Routes>

      <Footer />
    </Router>
  );
}
