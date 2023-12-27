"use client";

import { useState } from "react";
import { AdminImg } from "./AdminImg";
import { setBannersApi } from "@/src/utils/publicApi";

export const AdminMainBanner: React.FC = (): JSX.Element => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);

  const uploadFiles = async () => {
    const formData = new FormData();

    formData.append("bannerOne", (file1 as File) || "");
    formData.append("bannerTwo", (file2 as File) || "");
    formData.append("bannerThree", (file3 as File) || "");

    const response = await setBannersApi(formData);
  };

  return (
    <div className="admin__banner-list">
      <form action="">
        <AdminImg
          title="Banner one"
          file={file1}
          setFile={setFile1}
          placeholder="/slider/one.webp"
          id="banner-one"
        />
        <AdminImg
          title="Banner two"
          file={file2}
          setFile={setFile2}
          placeholder="/slider/three.webp"
          id="banner-two"
        />
        <AdminImg
          title="Banner three"
          file={file3}
          setFile={setFile3}
          placeholder="/slider/one.webp"
          id="banner-three"
        />
        <button
          onClick={uploadFiles}
          type="button"
          className="admin-panel__button"
        >
          Upload files
        </button>
      </form>
    </div>
  );
};
