"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

export interface ILoginModalProps {
  close: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: React.FC<ILoginModalProps> = ({
  close,
}: ILoginModalProps): JSX.Element => {
  const [tab, setTab] = useState<string>("login");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
          {tab === "login"
            ? "Enter your username and password to login."
            : "Enter your email and password to register."}
        </div>
        <form action="">
          <input type="text" placeholder="Username" />
          {tab !== "login" ? (
            <input type="text" placeholder="Enter your email address" />
          ) : null}
          <div className="password-block">
            <input
              type={showPassword ? "next" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                letterSpacing: password.length && !showPassword ? "3px" : "0px",
              }}
            />
            <Image
              onClick={() => setShowPassword(!showPassword)}
              className="show-password"
              src="/icons/eye.svg"
              alt="show password"
              width={20}
              height={20}
              style={{ opacity: showPassword ? 1 : 0.5 }}
            />
          </div>
          {tab !== "login" ? (
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "next" : "password"}
              placeholder="Confirm Password"
              style={{
                letterSpacing:
                  confirmPassword.length && !showPassword ? "3px" : "0px",
              }}
            />
          ) : null}
          {tab === "login" ? (
            <div className="forgot-password">Forgot Password?</div>
          ) : null}

          <button type="button" className="login-submit">
            {tab === "login" ? "Login" : "Register"}
          </button>
        </form>
        <div className="login-with">
          <div className="login-with__border"></div>
          <div>{tab === "login" ? "Or login with" : "Or register with"}</div>
          <div className="login-with__border"></div>
        </div>
        <div className="login-with__items">
          <button>
            <Image
              alt="google"
              src="/icons/google.svg"
              width={20}
              height={20}
            />
            <span>
              {tab === "login" ? "Login with Google" : "Continue with Google"}
            </span>
          </button>
          <button>
            <Image
              alt="google"
              src="/icons/face-book.svg"
              width={20}
              height={20}
            />
            <span>
              {tab === "login"
                ? "Login with Facebook"
                : "Continue with Facebook"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
