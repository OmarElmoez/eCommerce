import { Form } from "react-bootstrap";
import { TInput } from "@/types";
import { FieldValues } from "react-hook-form";
const Input = <T extends FieldValues> ({
  label,
  type = "text",
  name,
  register,
  error,
}: TInput<T>) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
