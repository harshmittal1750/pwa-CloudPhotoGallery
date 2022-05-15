import React, { useState } from "react";
import "./Gallery.css";
import { imagesData } from "../imagesData";
import Modal from "./Modal";

const Gallery = () => {
  const [model, setModel] = useState(null);

  return (
    <div>
      <div className="gallery-header container">
        <div className="h1">Gallery</div>
      </div>
      <div className="container pt-4">
        <div className="row">
          {imagesData.map((image, index) => {
            return (
              <>
                <div
                  key={index}
                  className="col-md-4 col-sm-6 grid-col my-3"
                  style={{
                    display: "grid",
                  }}
                >
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => setModel(image.images)}
                    style={{
                      outline: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    <img src={image.images} className="img-fluid" alt="" />
                    {/* <p>{image.images}</p> */}
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <Modal modalImg={model} />
      </div>
    </div>
  );
};

export default Gallery;
