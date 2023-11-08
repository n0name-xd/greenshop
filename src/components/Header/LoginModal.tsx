"use client";

import { Dispatch, SetStateAction, useState } from "react";

export interface ILoginModalProps {
  close: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: React.FC<ILoginModalProps> = ({
  close,
}: ILoginModalProps): JSX.Element => {
  const [tab, setTab] = useState<string>("login");

  return (
    <div className="login-modal">
      <div className="login-modal__container">
        <button onClick={() => close(false)} className="login-modal__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17007 3.17007C3.39682 2.94331 3.76447 2.94331 3.99122 3.17007L9 8.17884L14.0088 3.17007C14.2355 2.94331 14.6032 2.94331 14.8299 3.17007C15.0567 3.39682 15.0567 3.76447 14.8299 3.99122L9.82116 9L14.8299 14.0088C15.0567 14.2355 15.0567 14.6032 14.8299 14.8299C14.6032 15.0567 14.2355 15.0567 14.0088 14.8299L9 9.82116L3.99122 14.8299C3.76447 15.0567 3.39682 15.0567 3.17007 14.8299C2.94331 14.6032 2.94331 14.2355 3.17007 14.0088L8.17884 9L3.17007 3.99122C2.94331 3.76447 2.94331 3.39682 3.17007 3.17007Z"
              fill="#46A358"
            />
          </svg>
        </button>
        <div className="login-modal__tabs">
          <div
            className={`tab ${tab === "login" ? "tab_active" : ""}`}
            onClick={() => setTab("login")}
          >
            Login
          </div>
          <div className="tab__center">I</div>
          <div
            className={`tab ${tab === "login" ? "" : "tab_active"}`}
            onClick={() => setTab("register")}
          >
            Register
          </div>
        </div>
        <div className="login-modal__description">
          Enter your username and password to login.
        </div>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};
