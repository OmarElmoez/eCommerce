import { Form } from "react-bootstrap";
import { TInput } from "@/types";
import { FieldValues } from "react-hook-form";
const Input = <T extends FieldValues> ({
  label,
  type = "text",
  name,
  register,
  error,
  onblur,
  checkingText,
  availableText,
  disabled
}: TInput<T>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onblur) {
      onblur(e);
      register(name).onBlur(e)
    } else {
      register(name).onBlur(e)
    }
  }
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        onBlur={onblurHandler}
        isInvalid={!!error}
        isValid={!!availableText}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
      <Form.Control.Feedback type="valid">
        {availableText}
      </Form.Control.Feedback>
      {checkingText && <Form.Text muted>{checkingText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
