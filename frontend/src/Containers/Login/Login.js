import React, { useEffect, useState } from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import samooha_icon from "../../Assets/samooha-logo-icon.png";
import eye_open from "../../Assets/eye-open-icon.png";
import eye_close from "../../Assets/eye-close-icon.png";
import Modal from "../../Components/Modal/Modal";
import "./Login.scss";

const Login = () => {
  const [accountlocator, setAccountLocator] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (accountlocator && username && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [accountlocator, username, password, disabled]);

  useEffect(() => {
    const height = Streamlit.setFrameHeight("720");
  }, []);

  const handleOpen = () => {
    setShowModal(true);
    setAccountLocator("");
    setUsername("");
    setPassword("");
  };

  const handleClose = () => setShowModal(false);
  return (
    <>
      <div className="signup-container">
        <div className="samooha-icon-wrapper">
          <img
            src={samooha_icon}
            alt="samooha-logo"
            height="100%"
            width="100%"
          />
          {/* <h3>Samooha</h3> */}
        </div>
        <h3>Sign up using SnowFlake account</h3>
        <div className="input-wrapper margin-top">
          <input
            type="text"
            placeholder="Account locator"
            value={accountlocator}
            onChange={(e) => setAccountLocator(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            {!showPassword ? (
              <img src={eye_close} onClick={() => setShowPassword(true)} />
            ) : (
              <img src={eye_open} onClick={() => setShowPassword(false)} />
            )}
          </span>
        </div>

        <div className="policy-container">
          By signing up, I agree to the{" "}
          <a href="https://www.samooha.tech/" target="__blank">
            Terms of service
          </a>{" "}
          and{" "}
          <a href="https://www.samooha.tech/" target="__blank">
            Privacy policy.
          </a>
        </div>

        <div className="btn-wrapper">
          <button
            className={disabled ? "active-btn disable-btn" : "active-btn"}
            onClick={!disabled ? handleOpen : handleClose}
          >
            Sign up
          </button>
        </div>

        <div className="note-wrapper">
          Note: You can later login to Samooha as a <span>Provider</span> or a{" "}
          <span>Consumer</span>
        </div>
      </div>

      {showModal && (
        <Modal>
          <div className="modal-wrapper">
            <h3>Thank you!</h3>
            <p>You have successfully signed up</p>
            <div className="btn-wrapper">
              <button className="active-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default withStreamlitConnection(Login);
