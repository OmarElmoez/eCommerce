import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { TFormInputs, signUpSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" {...register("firstName")} isInvalid={!!errors.firstName} />
        <Form.Control.Feedback type="invalid">
          {errors.firstName?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" {...register("lastName")} isInvalid={!!errors.lastName} />
        <Form.Control.Feedback type="invalid">
          {errors.lastName?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" {...register("email")} isInvalid={!!errors.email} />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register("password")} isInvalid={!!errors.password} />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" {...register("confirmPassword")} isInvalid={!!errors.confirmPassword} />
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="info" type="submit" style={{ color: "#fff" }}>
        Submit
      </Button>
    </Form>
  );
};

export default Register;
