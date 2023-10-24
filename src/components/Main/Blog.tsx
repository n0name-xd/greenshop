import Image from "next/image";

export const Blog = (): JSX.Element => {
  return (
    <div className="main-blog">
      <div>
        <h3>
          Summer cactus <br /> & succulents
        </h3>
        <p>
          We arean online plant shop offering a wide <br /> range of cheap and
          trendy plants
        </p>
        <button className="custom-button">
          Find more
          <Image
            alt="arrow left"
            src="/icons/arrow-right2.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div>
        <h3>
          Styling trends <br /> & much more
        </h3>
        <p>
          We arean online plant shop offering a wide <br /> range of cheap and
          trendy plants
        </p>
        <button className="custom-button">
          Find more
          <Image
            alt="arrow left"
            src="/icons/arrow-right2.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  );
};
