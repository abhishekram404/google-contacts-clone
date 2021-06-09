import React, { useState, useRef } from "react";
import styled from "styled-components";
export default function Main() {
  const Sub = styled.h4`
    color: #75787c;
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    padding: 20px 15px;
  `;
  return (
    <div className="main">
      <TitleBar />
      <Sub>Contacts(44)</Sub>
      <div className="contacts-list">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}
const TitleBar = () => {
  return (
    <div className="title-bar">
      <h4>Name</h4>
      <h4>Email</h4>
      <h4>Phone number</h4>
      <h4>Job title & company</h4>
      <h4>Labels</h4>
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    </div>
  );
};

const Contact = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="contact"
      onMouseEnter={() => {
        setHovered(!isHovered);
      }}
      onMouseLeave={() => {
        setHovered(!isHovered);
      }}
    >
      {isHovered ? (
        <div className="box-cont">
          <input type="checkbox" />
        </div>
      ) : (
        <div className="img-cont">
          <h3>A</h3>
        </div>
      )}

      <h4>Alex Marriam</h4>
      <h4>alexmarriam@gmail.com</h4>
      <h4>+97798123456678</h4>
      <h4>Senior Er. Whitehat Agency </h4>
      <h4>
        <div className="label">Restored from IPhone ...</div>
      </h4>
      <div className="options">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L3 16.82V21h4.18L20.41 7.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </div>
    </div>
  );
};
