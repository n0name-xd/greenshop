export const ShopItem = (): JSX.Element => {
  return (
    <div className="shop-item">
      <div className="shop-item__main-info">
        <div className="shop-item__column-photo">
          <div className="photo__mini photo1"></div>
          <div className="photo__mini photo2"></div>
          <div className="photo__mini photo3"></div>
          <div className="photo__mini photo4"></div>
        </div>
        <div className="shop-item__main-photo">
          <div className="main-photo">
            <div className="main-photo__magnifier">
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
                  d="M8.61539 2.65385C5.32229 2.65385 2.65385 5.32017 2.65385 8.60784C2.65385 11.8955 5.32229 14.5618 8.61539 14.5618C10.2583 14.5618 11.7449 13.8989 12.8238 12.825C13.9075 11.7463 14.5769 10.2556 14.5769 8.60784C14.5769 5.32017 11.9085 2.65385 8.61539 2.65385ZM1.5 8.60784C1.5 4.68166 4.6863 1.5 8.61539 1.5C12.5445 1.5 15.7308 4.68166 15.7308 8.60784C15.7308 10.3669 15.0905 11.9773 14.0312 13.218L16.3308 15.5149C16.5562 15.7401 16.5564 16.1054 16.3313 16.3308C16.1061 16.5562 15.7408 16.5564 15.5154 16.3313L13.2137 14.0322C11.9738 15.082 10.3682 15.7157 8.61539 15.7157C4.6863 15.7157 1.5 12.534 1.5 8.60784Z"
                  fill="#3D3D3D"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="shop-item__control_panele">
          <h1>Barberton Daisy</h1>
        </div>
      </div>
    </div>
  );
};
