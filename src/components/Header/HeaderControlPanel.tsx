"use client";
import Image from "next/image";
import { useState } from "react";
import { LoginModal } from "./LoginModal";

export const HeaderControlPanel = (): JSX.Element => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  return (
    <div className="control-panele">
      <button className="control-panele__search noselect">
        <Image
          src="/icons/search-icon.svg"
          alt="search"
          width={20}
          height={20}
          priority
        />
      </button>
      <button className="control-panele__basket noselect">
        <Image
          src="/icons/basket-icon.svg"
          alt="search"
          width={24}
          height={24}
          priority
        />
        <span className="basket-count noselect">6</span>
      </button>
      <button
        onClick={() => setLoginModal(true)}
        className="control-panele__login noselect"
      >
        Login
      </button>
      {loginModal ? <LoginModal close={setLoginModal} /> : null}
    </div>
  );
};
