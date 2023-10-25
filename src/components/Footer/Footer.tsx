import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__plants plants-one">
          <Image alt="plant" src="/footer/bush.svg" width={61} height={46} />
          <h4>Garden Care</h4>
          <p className="footer__text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="footer__plants plants-two">
          <Image alt="plant" src="/footer/bush2.svg" width={61} height={46} />
          <h4>Plant Renovation</h4>
          <p className="footer__text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="footer__plants plants-three">
          <Image alt="plant" src="/footer/bush3.svg" width={61} height={46} />
          <h4>Watering Graden</h4>
          <p className="footer__text">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="newsletters">
          <h4>Would you like to join newsletters?</h4>
          <div className="newsletters__input">
            <input placeholder="enter your email address..." type="text" />
            <button>Join</button>
          </div>
          <p className="footer__text">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      <div className="footer__middle">2</div>
      <div className="footer__low">3</div>
      <div className="coppyright">© 2021 GreenShop. All Rights Reserved.</div>
    </footer>
  );
};
