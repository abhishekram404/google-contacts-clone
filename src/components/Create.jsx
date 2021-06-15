import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { create_mode_off } from "../redux/actions/actions";

export default function Create() {
  const dispatch = useDispatch();
  const documentRef = useRef(null);
  const createFormRef = useRef(null);

  const off = (e) => {
    if (!e.target.matches(".create-cont")) {
      return;
    }

    dispatch(create_mode_off());
  };
  useEffect(() => {
    documentRef.current.addEventListener("click", off);
  }, []);

  return (
    <div className="create-cont" ref={documentRef}>
      <div className="create" ref={createFormRef}>
        <header>
          <h4>Create new contact</h4>
          <div className="label-btn">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
            </svg>
            <span> No label</span>
          </div>
        </header>
        <form>
          <div className="row">
            <div className="profile-pic">
              <div className="pic"></div>
            </div>
            <div className="input-fields">
              <InputField
                propObject={{
                  elemId: "firstName",
                  name: "First Name",
                  type: "text",
                }}
              />{" "}
              <InputField
                propObject={{
                  elemId: "surname",
                  name: "Surname",
                  type: "text",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
              </svg>
            </div>
            <div className="input-fields">
              <InputField
                propObject={{
                  name: "Company",
                  elemId: "company",
                  type: "text",
                }}
              />
              <InputField
                propObject={{
                  name: "Job title",
                  elemId: "jobTitle",
                  type: "text",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
              </svg>
            </div>
            <div className="input-fields email">
              <InputField
                propObject={{ name: "Email", elemId: "email", type: "email" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path>
              </svg>
            </div>
            <div className="input-fields phone">
              <InputField
                propObject={{
                  name: "Country Code",
                  elemId: "countryCode",
                  type: "number",
                }}
              />

              <InputField
                propObject={{ name: "Phone", elemId: "phone", type: "number" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M16 4H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z"></path>
              </svg>
            </div>
            <div className="input-fields">
              <InputField
                propObject={{ name: "Notes", elemId: "notes", type: "text" }}
              />
            </div>
          </div>
        </form>
        <footer>
          <a href="#some" id="disabled">
            Show more
          </a>
          <span></span>
          <a
            href="#some"
            onClick={() => {
              dispatch(create_mode_off());
            }}
          >
            Cancel
          </a>
          <a href="#some">Save</a>
        </footer>
      </div>
    </div>
  );
}

const InputField = (props) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const handleFocus = (event) => {
    switch (event) {
      case "focus":
        labelRef.current.classList.add("focused");
        return;
      case "blur":
        if (inputRef.current.value != "") {
          if (inputRef.current.value) return;
          return;
        }
        labelRef.current.classList.remove("focused");
        return;
      default:
        return;
    }
  };

  return (
    <label htmlFor={props.propObject.elemId}>
      <span ref={labelRef}>{props.propObject.name}</span>
      <input
        type={props.propObject.type}
        id={props.elemId}
        ref={inputRef}
        onFocus={() => {
          handleFocus("focus");
        }}
        onBlur={() => {
          handleFocus("blur");
        }}
      />
    </label>
  );
};
