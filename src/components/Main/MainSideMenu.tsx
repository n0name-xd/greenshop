export const MainSideMenu = (): JSX.Element => {
  const categories = [
    {
      name: "House Plants",
      count: 33,
    },
    {
      name: "Potter Plants",
      count: 12,
    },
    {
      name: "Seeds",
      count: 65,
    },
    {
      name: "Small Plants",
      count: 39,
    },
    {
      name: "Big Plants",
      count: 23,
    },
    {
      name: "Succulents",
      count: 17,
    },
    {
      name: "Trerrariums",
      count: 19,
    },
    {
      name: "Gardening",
      count: 13,
    },
    {
      name: "Accessories",
      count: 18,
    },
  ];

  const categoryList = categories.map((el: { name: string; count: number }) => {
    return (
      <li key={el.name} className="">
        1
      </li>
    );
  });
  return (
    <div className="main-content__side-menu">
      <h3>Categories</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
