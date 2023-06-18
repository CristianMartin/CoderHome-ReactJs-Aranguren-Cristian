import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <section id="sponsors" className="mt-5">
      <h2 className="text-bg-dark bg-gradient text-center text-uppercase p-2">
        Sponsors
      </h2>
      <div className="marca-img d-flex mb-4">
        <img src="../src/assets/marca_nvidia.png" alt="marca_nvidia" />
        <img src="../src/assets/marca_asus.jpg" alt="marca_asus" />
        <img src="../src/assets/marca_adata.jpg" alt="marca_adata" />
        <img src="../src/assets/marca_asrock.jpg" alt="marca_asrock" />
        <img src="../src/assets/marca_intel.jpg" alt="marca_intel" />
        <img src="../src/assets/marca_hiperx.jpg" alt="marca_hiperx" />
      </div>
    </section>
  );
};

export default Sponsors;
