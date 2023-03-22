import React from "react";
import "../ModalContainer/index.css";
import Login from "../Login/index";
import Register from "../signUp/index";
export default function ModalContainer({ login, register }) {
  return (
    <>
      {login ? (
        <div className="modal-container">
          <div className="content">
            <Login login={login} />
          </div>
        </div>
      ) : (
        ""
      )}
      {register ? (
        <div className="modal-container">
          <div className="content">
            <Register register={register} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
