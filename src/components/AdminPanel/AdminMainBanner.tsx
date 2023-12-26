"use client";

import { useState } from "react";
import { AdminImg } from "./AdminImg";

export const AdminMainBanner: React.FC = (): JSX.Element => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);

  return (
    <div className="admin__banner-list">
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

      <button className="admin-panel__button">Upload files</button>
    </div>
  );
};
