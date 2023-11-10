"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { loginApi } from "@/src/utils/publickApi";
import { CustomInput } from "../common/CustomInput";

export interface ILoginModalProps {
  close: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: React.FC<ILoginModalProps> = ({
  close,
}: ILoginModalProps): JSX.Element => {
  const [tab, setTab] = useState<string>("login");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [userNameError, setUserNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSubmit = async (): Promise<void> => {
    setUserNameError("");
    setPasswordError("");

    if (tab === "login") {
      if (userName.length < 4) {
        setUserNameError("The login must contain at least 4 characters");
        return;
      }

      if (password.length < 4) {
        setPasswordError("The password must contain at least 4 characters");
        return;
      }

      const loginData = {
        userName,
        password,
      };

      await loginApi(loginData);
    } else {
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="login-modal">
      <div className="login-modal__container">
        <button onClick={() => close(false)} className="login-modal__close">
          <Image
            src="/icons/cross.svg"
            width={18}
            height={18}
            alt="close button"
          />
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
          <CustomInput
            onChange={setUserName}
            value={userName}
            type="text"
            placeholder="Username"
            error={userNameError}
          />
          {tab !== "login" ? (
            <input type="text" placeholder="Enter your email address" />
          ) : null}
          <div className="password-block">
            <CustomInput
              onChange={setPassword}
              value={password}
              type={showPassword ? "next" : "password"}
              placeholder="Password"
              error={passwordError}
              style={{
                letterSpacing: password.length && !showPassword ? "3px" : "0px",
                position: "absolute",
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

          <button
            style={{}}
            onClick={handleSubmit}
            type="button"
            className="login-submit"
          >
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
