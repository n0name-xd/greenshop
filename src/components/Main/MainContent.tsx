import { MainSideMenu } from "./MainSideMenu";

export const MainContent = (): JSX.Element => {
  return (
    <div className="main-content">
      <MainSideMenu />
      <div className="main-content__content">All Plants</div>
    </div>
  );
};
