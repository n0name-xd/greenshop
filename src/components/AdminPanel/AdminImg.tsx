import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type TAdminImgProps = {
  title: string;
  setFile: Dispatch<SetStateAction<File | null>>;
  file: File | null;
  placeholder: string;
  id: string;
};

export const AdminImg: React.FC<TAdminImgProps> = ({
  title,
  setFile,
  file,
  placeholder,
  id,
}: TAdminImgProps): JSX.Element => {
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);

  const imageMimeType = /image\/(png|jpg|jpeg|webp)/i;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target || !e.target.files) return;

    const currentfile = e.target.files[0];

    if (!currentfile.type.match(imageMimeType)) return;

    setFile(currentfile);
  };

  const handleClear = (): void => {
    setFile(null);
    setFileDataURL(null);
  };

  useEffect(() => {
    let isCancel = false;
    let fileReader: FileReader | null;

    if (file) {
      fileReader = new FileReader();

      fileReader.onload = (e) => {
        if (!e.target || !e.target.result) return;

        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result.toString());
        }
      };

      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div className="input_img">
      <div>
        <h4>{title}</h4>
        <label className="admin-panel__button" htmlFor={id}>
          <input
            id={id}
            hidden
            type="file"
            onChange={(e) => handleChange(e)}
            accept="image/*,.png,.svg,.webp,.jpg"
          />
          Change file
        </label>
        <div style={{ marginTop: "20px" }}>
          <button className="admin-panel__button" onClick={handleClear}>
            clear
          </button>
        </div>
      </div>
      <div>
        <Image
          style={{ border: "1px solid green" }}
          alt="banner"
          src={fileDataURL ? fileDataURL : placeholder}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};
