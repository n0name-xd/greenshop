import { Blog } from "./Blog";
import { MainPagination } from "./MainPagination";
import { MainProductList } from "./MainProductList";
import { MainSideMenu } from "./MainSideMenu";

export const MainContent = (): JSX.Element => {
  return (
    <>
      <div className="main-content">
        <MainSideMenu />
        <MainProductList />
      </div>
      <MainPagination />
      <Blog />
    </>
  );
};
