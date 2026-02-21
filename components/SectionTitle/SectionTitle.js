import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-12">
        <div className="wpo-section-title">
          <h2>{props.Title}</h2>
          <p>
            Let's connect and explore how I can help bring your software
            development projects to the next level! I’ll fully manage your
            project from start to finish Regular communication is really
            important to me, so let’s keep in touch!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
