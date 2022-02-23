import React from "react";

const Modal = ({ modalImg }) => {
  // console.log(modalImg);
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div
              className="modal-body"
              style={{ outline: "none", padding: 0, margin: 0 }}
            >
              <img src={modalImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
