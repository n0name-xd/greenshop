import { CSSProperties, Dispatch, SetStateAction } from "react";

interface ICustomInputProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string;
  error: string;
  style?: CSSProperties | undefined;
}

export const CustomInput: React.FC<ICustomInputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  error,
  style,
}: ICustomInputProps): JSX.Element => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="custom-input"
        style={{ borderColor: error.length ? "red" : "", ...style }}
      />
      <span className="custom-input__error">{error}</span>
    </>
  );
};
