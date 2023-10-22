import Image from "next/image";

export const MainPagination = (): JSX.Element => {
  return (
    <div className="main-pagination">
      <div className="active">1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>
        <Image
          alt="arrow right"
          src="/icons/arrow-right.svg"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
};
