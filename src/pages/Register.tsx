import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const Register = () => {
  const { register, handleSubmit } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    console.log(data);
  };
  
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" {...register("firstName")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" {...register("lastName")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" {...register("email")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register("password")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" {...register("confirmPassword")} />
      </Form.Group>

      <Button variant="info" type="submit" style={{ color: "#fff" }}>
        Submit
      </Button>
    </Form>
  );
};

export default Register;
