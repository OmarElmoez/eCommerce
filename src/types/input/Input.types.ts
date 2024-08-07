import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TInput<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error: string;
  onblur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  checkingText?: string;
  availableText?: string;
  disabled?: boolean
};

export default TInput