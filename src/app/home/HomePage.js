import React from "react";
import Navbar from "../layout/Navbar";
import Pages from "./Pages";
import KopiKatarasa from "./KopiKatarasa";
import Card from "./Card";
import Inspirasi from "./Inspirasi";
import KabarKatarasa from "./KabarKatarasa";
import Instagram from "./Instagram";
import ApaKataMereka from "./ApaKataMereka";
import MerchandiseKami from "./MerchandiseKami";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Pages />
      <KopiKatarasa />
      <Card />
      <Inspirasi />
      {/* <KabarKatarasa />
      <MerchandiseKami /> */}
      {/* <ApaKataMereka /> */}
      <Instagram />
      <Footer />
    </div>
  );
}

export default HomePage;
